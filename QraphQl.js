// query AboutQuery($partnerListUUIDs: [String!]!) {
//     allOrganization(filter: {uuid: {in: $partnerListUUIDs}}) {
//       edges {
//         node {
//           uuid
//           slug
//           name
//           logoImageUrl
//         }
//       }
//     }
//   }
// `;