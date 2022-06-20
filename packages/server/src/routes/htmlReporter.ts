/* eslint-disable max-len */
import Router from 'koa-router';
import dbService from '../service/dbService';
import { bPayloadData } from '../data';

type BPayloadSectionKeys = keyof typeof bPayloadData;

const isBPayloadkey = (el: any): el is BPayloadSectionKeys => el in bPayloadData;

const getPayloadSection = (payload: string, section: string) => {
  switch (payload) {
    case 'B':
      return isBPayloadkey(section) ? bPayloadData[section] : null;

    default:
      return null;
  }
};

const renderHTMLList = (obj: { [key: string]: any }) => `<ul>${Object.entries(obj).map(([k, v]) => `<li>${k}: ${v}</li>`)}</ul>`;

const renderHTMLTable = (list: any[]) => {
  let template = '';

  if (Array.isArray(list[0])) {
    for (let i = 0; i < list.length; i += 1) {
      template = `${template}${renderHTMLTable(list[i])}`;
    }
  } else {
    template = `<thead><tr>${Object.keys(list[0]).map((k) => `<th>${k}</th>`)}</tr></htead>`;

    for (let i = 0; i < list.length; i += 1) {
      template = `${template}<tbody><tr>${Object.values(list[i]).map((v) => `<td>${v}</td>`)}</tr></tbody>`;
    }

    template = `<table>${template}</table>`;
  }

  return template;
};

const renderHTMLTemplate = (el: any[] | { [key: string]: any } | null) => {
  if (!el) return '';

  if (Array.isArray(el)) return renderHTMLTable(el);

  return renderHTMLList(el);
};

const htmlReporter = new Router();

htmlReporter.post('/html-report', async (ctx) => {
  const { config } = ctx.request.header;

  if (!config) ctx.throw(401, 'Please build config first');

  const configData = await dbService.fetchConfigById(config as string);

  await ctx.render('index', {
    reportName: configData.reportName,
    reportSections: String(
      configData.data.map(({ reportType, sections }: any) => sections.map(
        ({ sectionName }: any) => `<h3>${sectionName}</h3>${renderHTMLTemplate(getPayloadSection(reportType, sectionName))}`,
      )),
    ).replaceAll(',', ''),
  });
});

export default htmlReporter;
