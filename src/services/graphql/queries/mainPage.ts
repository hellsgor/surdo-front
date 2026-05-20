const mainPageQuery = /* GraphQL */ `
  query MainPage {
    dimples_connection {
      nodes {
        documentId
        Title
        Sort
        Image {
          alt
          desktop {
            url
          }
          mobile {
            url
          }
        }
      }
    }
    homePage {
      hero {
        bullets {
          text
          id
        }
        image {
          desktop {
            url
          }
          mobile {
            url
          }
          alt
        }
        primaryButton {
          href
          label
          leftText
          rightText
        }
        secondaryButton {
          href
          label
          leftText
          rightText
        }
        title {
          text
          colored
        }
      }
      tasks {
        title {
          colored
          text
        }
        text
        servicePages_connection {
          nodes {
            order
            slug
            title
            documentId
          }
        }
      }
      about {
        title {
          colored
          text
        }
        button {
          href
          label
          leftText
          rightText
        }
        advantages {
          id
          label
          value
          image {
            desktop {
              url
            }
            mobile {
              url
            }
            alt
          }
        }
        topText
        bottomText
      }
      reviews {
        title {
          colored
          text
        }
        profi {
          href
          label
          leftText
          rightText
        }
        items_connection {
          nodes {
            age
            documentId
            name
            order
            showOnMainPage
            text
            reviewsTags_connection {
              nodes {
                documentId
                text
                value
              }
            }
          }
        }
      }
      classesFormat {
        title {
          colored
          text
        }
        items {
          id
          description
          icon {
            url
            alternativeText
          }
          title
        }
      }
      faq {
        title {
          colored
          text
        }
        faqItems_connection {
          nodes {
            question
            answer
            documentId
          }
        }
      }
    }
  }
`;

export default mainPageQuery;
