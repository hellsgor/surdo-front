const globalDataQuery = /* GraphQL */ `
  query GlobalData($filters: MenuItemFiltersInput) {
    menuItems_connection(filters: $filters) {
      nodes {
        title
        order
        side
        path
        isDisabled
        children {
          path
          title
          isDisabled
        }
      }
    }
    cta {
      image {
        desktop {
          url
        }
        mobile {
          url
        }
        alt
      }
      text
      tgLink {
        href
        label
        leftText
        rightText
      }
      title {
        colored
        text
      }
      vkLink {
        href
        label
        leftText
        rightText
      }
    }
    footer {
      copyRight
      privacy {
        href
        label
        leftText
        rightText
      }
      createdByWhom {
        href
        label
        leftText
        rightText
      }
    }
  }
`;

export default globalDataQuery;
