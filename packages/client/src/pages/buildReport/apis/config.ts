import { gql } from '@apollo/client';

export const BUILD_CONFIG_MUTATION = gql`
  mutation BuildReport($configInput: ConfigInput!) {
    buildReport(ConfigInput: $configInput) {
      id
      data {
        reportType
        sections {
          sectionName
          renderTypes
        }
      }
    }
  }
`;
