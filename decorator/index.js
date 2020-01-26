class Link {
  constructor({ protocol = 'https', domain = '', path = '' }) {
    this.protocol = protocol;
    this.domain = domain;
    this.path = path;
  }

  get url() {
    return `${this.protocol}://${this.domain}${this.path}`;
  }
}

/**
 * Link decoration class
 */
class RegionalLink {
  constructor({ link, region }) {
    this.link = link;
    this.region = region;
  }

  get url() {
    const url = this.link.url;
    return `${url}?region=${this.region}`;
  }
}

const homePage = new Link({ domain: 'example.com', path: '/about' });
const homePageInGerman = new RegionalLink({ link: homePage, region: 'de' });

console.log(homePage.url);
console.log(homePageInGerman.url);
