/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type CustomHtml = {
  _type: "custom-html";
  codeTitle?: string;
  html?: Code;
  isAddFiles?: boolean;
  fileGroup?: Array<{
    title?: string;
    files?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
      };
      _type: "file";
      _key: string;
    }>;
    _key: string;
  }>;
};

export type CreationArchives = {
  _id: string;
  _type: "creationArchives";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  intro?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  archive?: Array<{
    title?: string;
    description?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    status?: string;
    _key: string;
  }>;
};

export type LastEvent = {
  _id: string;
  _type: "lastEvent";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  event?: {
    isDisplayed?: boolean;
    title?: string;
    events?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "events";
    }>;
    ctaToEvents?: string;
  };
};

export type ContactForm = {
  _type: "contact-form";
  title?: string;
  description?: string;
  recipient?: string;
};

export type Link = {
  _type: "link";
  label?: string;
  type?: "internal" | "external" | "mail";
  internal?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "main-pages";
  };
  external?: string;
  mail?: string;
};

export type MultiImages = {
  _id: string;
  _type: "multi-images";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  images?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    alt?: string;
    _key: string;
  }>;
};

export type SingleImage = {
  _id: string;
  _type: "single-image";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type DocumentFile = {
  _id: string;
  _type: "document-file";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  file?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
};

export type RichTextAndTitle = {
  _id: string;
  _type: "richTextAndTitle";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Richtext = {
  _id: string;
  _type: "richtext";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type NotFound = {
  _id: string;
  _type: "not-found";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  content?: string;
  link?: {
    ctaTitle?: string;
    href?: string;
  };
};

export type Content = {
  _id: string;
  _type: "content";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titleBlock?: string;
  block?: Array<
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "document-file";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "richtext";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "richTextAndTitle";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "single-image";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "multi-images";
      }
    | ({
        _key: string;
      } & Link)
    | ({
        _key: string;
      } & ContactForm)
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "lastEvent";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "creationArchives";
      }
    | ({
        _key: string;
      } & CustomHtml)
  >;
};

export type Intro = {
  _id: string;
  _type: "intro";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  block?: Array<
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "document-file";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "richtext";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "richTextAndTitle";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "single-image";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "multi-images";
      }
    | ({
        _key: string;
      } & Link)
    | ({
        _key: string;
      } & ContactForm)
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "lastEvent";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "creationArchives";
      }
    | ({
        _key: string;
      } & CustomHtml)
  >;
};

export type LesArchivesVivantes = {
  _id: string;
  _type: "lesArchivesVivantes";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  linkToVimeo?: string;
  linkToPodcast?: string;
};

export type Homepage = {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero?: {
    hero?: Array<{
      title?: string;
      paragraph?: string;
      image?: {
        image?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
        alt?: string;
      };
      cta?: {
        ctaLabel?: string;
        ctaLink?:
          | {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "main-pages";
            }
          | {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "events";
            }
          | {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "blogs";
            };
      };
      _key: string;
    }>;
  };
  multiBlock?: {
    eventsBlock?: {
      events?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "events";
      }>;
    };
    lesArchivesVivantesBlock?: {
      title?: string;
      podcast?: {
        podcastTitle?: string;
        linkToPodcast?: string;
      };
      vimeo?: {
        vimeoTitle?: string;
        linkToVimeo?: string;
      };
    };
    leBlogBlock?: {
      title?: string;
      linkToBlog?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "blogs";
      };
      blogLabel?: string;
    };
  };
  video?: {
    videoTitle?: string;
    videoLink?: string;
  };
  outro?: {
    outroTitle?: string;
    outroText?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  };
};

export type Blogs = {
  _id: string;
  _type: "blogs";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  blogTitle?: string;
  slug?: Slug;
  blogContentText?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  blogImages?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    alt?: string;
    _key: string;
  }>;
};

export type Events = {
  _id: string;
  _type: "events";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  eventTitle?: string;
  slug?: Slug;
  eventDescription?: string;
  eventDate?: {
    eventStartDate?: string;
    addEndDate?: boolean;
    eventEndDate?: string;
  };
  eventLocation?: string;
  eventImage?: {
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    alt?: string;
  };
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  globalSettings?: {
    siteTitle?: string;
    ogImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  header?: {
    logo?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    headerLinks?: Array<{
      type?: "internal" | "external";
      internalLink?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "main-pages";
      };
      externalLink?: {
        title?: string;
        url?: string;
      };
      _key: string;
    }>;
  };
  footer?: {
    moduleGroups?: Array<{
      groupName?: string;
      modules?: Array<{
        type?: "internal" | "external" | "text";
        internalLink?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "pages";
        };
        externalLink?: {
          title?: string;
          url?: string;
        };
        text?: string;
        _key: string;
      }>;
      _key: string;
    }>;
  };
};

export type Pages = {
  _id: string;
  _type: "pages";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  navigation?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "pages";
  }>;
  content?: Array<
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "document-file";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "richtext";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "richTextAndTitle";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "single-image";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "multi-images";
      }
    | ({
        _key: string;
      } & Link)
    | ({
        _key: string;
      } & ContactForm)
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "lastEvent";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "creationArchives";
      }
    | ({
        _key: string;
      } & CustomHtml)
  >;
};

export type MainPages = {
  _id: string;
  _type: "main-pages";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: Array<
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "intro";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "content";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "not-found";
      }
  >;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Code = {
  _type: "code";
  language?: string;
  filename?: string;
  code?: string;
  highlightedLines?: Array<number>;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | CustomHtml
  | CreationArchives
  | LastEvent
  | ContactForm
  | Link
  | MultiImages
  | SingleImage
  | DocumentFile
  | RichTextAndTitle
  | Richtext
  | NotFound
  | Content
  | Intro
  | LesArchivesVivantes
  | Homepage
  | Blogs
  | Events
  | Settings
  | Pages
  | MainPages
  | SanityFileAsset
  | Slug
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Code;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: settingsQuery
// Query: *[_type == "settings"][0] {  "globalSettings": {    "siteTitle": globalSettings.siteTitle,    "ogImage": globalSettings.ogImage.asset->url,    "altText": globalSettings.ogImage.alt  },  "header": {    "logo": header.logo.asset->url,    "links": header.headerLinks[] {      type,      "internalLinkDetails": internalLink-> {        _id,        _type,        title,        "slug": slug.current      },      "externalLinkDetails": {        "title": externalLink.title,        "url": externalLink.url      }    }  },  "footer": {    _id,    "moduleGroups": footer.moduleGroups[] {      _id,      groupName,      "modules": modules[] {        _id,        type,        "internalDetails": internalLink-> {          _id,          _type,          title,          "slug": slug.current        },        "externalDetails": {          "title": externalLink.title,          "url": externalLink.url        },        "text": text      }    }  }}
export type SettingsQueryResult = {
  globalSettings: {
    siteTitle: string | null;
    ogImage: string | null;
    altText: string | null;
  };
  header: {
    logo: string | null;
    links: Array<{
      type: "external" | "internal" | null;
      internalLinkDetails: {
        _id: string;
        _type: "main-pages";
        title: string | null;
        slug: string | null;
      } | null;
      externalLinkDetails: {
        title: string | null;
        url: string | null;
      };
    }> | null;
  };
  footer: {
    _id: string;
    moduleGroups: Array<{
      _id: null;
      groupName: string | null;
      modules: Array<{
        _id: null;
        type: "external" | "internal" | "text" | null;
        internalDetails: {
          _id: string;
          _type: "pages";
          title: string | null;
          slug: string | null;
        } | null;
        externalDetails: {
          title: string | null;
          url: string | null;
        };
        text: string | null;
      }> | null;
    }> | null;
  };
} | null;
// Variable: moreStoriesQuery
// Query: *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {    _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), picture},}
export type MoreStoriesQueryResult = Array<never>;
// Variable: postQuery
// Query: *[_type == "post" && slug.current == $slug] [0] {  content,    _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), picture},}
export type PostQueryResult = null;
// Variable: headerQuery
// Query: *[_type == "header"] {  "imageUrl": logo.asset->url,  "url": links[]->{     title,     "slug": slug.current  }}
export type HeaderQueryResult = Array<never>;
// Variable: footerQuery
// Query: *[_type == "footer"][0] {  title,}
export type FooterQueryResult = null;
// Variable: heroQuery
// Query: *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {  content,    _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), picture},}
export type HeroQueryResult = null;
// Variable: homepageQuery
// Query: *[_type == "homepage"][0] {  ...,  "hero": hero.hero[]{      ...,  _id,  _key,  "image": image{    "imageUrl": image.asset->url,    alt,  },  cta {    ctaLabel,    ctaLink->{      _type,      "slug": slug.current    }  },  },  "multiBlock": multiBlock {    leBlogBlock {      title,      "linkToBlog": linkToBlog->_ref,      blogLabel    },    lesArchivesVivantesBlock {      title,      vimeo {        vimeoTitle,        linkToVimeo      },      podcast {        linkToPodcast,        podcastTitle      }    },    eventsBlock {      "events": events[]->{        _id,        eventTitle,        slug,        eventDate,        eventDescription,        eventLocation,        "image": eventImage{          "imageUrl": image.asset->url,          alt,        }      }    },  },  video {    videoTitle,    videoLink,  },  outro {    outroTitle,    outroText,  },}
export type HomepageQueryResult = {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero: Array<{
    title?: string;
    paragraph?: string;
    image: {
      imageUrl: string | null;
      alt: string | null;
    } | null;
    cta: {
      ctaLabel: string | null;
      ctaLink:
        | {
            _type: "blogs";
            slug: string | null;
          }
        | {
            _type: "events";
            slug: string | null;
          }
        | {
            _type: "main-pages";
            slug: string | null;
          }
        | null;
    } | null;
    _key: string;
    _id: null;
  }> | null;
  multiBlock: {
    leBlogBlock: {
      title: string | null;
      linkToBlog: null;
      blogLabel: string | null;
    } | null;
    lesArchivesVivantesBlock: {
      title: string | null;
      vimeo: {
        vimeoTitle: string | null;
        linkToVimeo: string | null;
      } | null;
      podcast: {
        linkToPodcast: string | null;
        podcastTitle: string | null;
      } | null;
    } | null;
    eventsBlock: {
      events: Array<{
        _id: string;
        eventTitle: string | null;
        slug: Slug | null;
        eventDate: {
          eventStartDate?: string;
          addEndDate?: boolean;
          eventEndDate?: string;
        } | null;
        eventDescription: string | null;
        eventLocation: string | null;
        image: {
          imageUrl: string | null;
          alt: string | null;
        } | null;
      }> | null;
    } | null;
  } | null;
  video: {
    videoTitle: string | null;
    videoLink: string | null;
  } | null;
  outro: {
    outroTitle: string | null;
    outroText: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  } | null;
} | null;
// Variable: eventsQuery
// Query: *[_type == "events" ] | order(eventDate.eventStartDate desc) {  _id,  eventTitle,  slug,  eventDate,  eventDescription,  eventLocation,  "image": eventImage{    "imageUrl": image.asset->url,    alt,  },}
export type EventsQueryResult = Array<{
  _id: string;
  eventTitle: string | null;
  slug: Slug | null;
  eventDate: {
    eventStartDate?: string;
    addEndDate?: boolean;
    eventEndDate?: string;
  } | null;
  eventDescription: string | null;
  eventLocation: string | null;
  image: {
    imageUrl: string | null;
    alt: string | null;
  } | null;
}>;
// Variable: eventQuery
// Query: *[_type == "events" && slug.current == $event][0]{  _id,  eventTitle,  slug,  eventDate,  eventDescription,  eventLocation,  "image": eventImage{      "imageUrl": image.asset->url,      alt,    },}
export type EventQueryResult = {
  _id: string;
  eventTitle: string | null;
  slug: Slug | null;
  eventDate: {
    eventStartDate?: string;
    addEndDate?: boolean;
    eventEndDate?: string;
  } | null;
  eventDescription: string | null;
  eventLocation: string | null;
  image: {
    imageUrl: string | null;
    alt: string | null;
  } | null;
} | null;
// Variable: lastEventQuery
// Query: *[_type == "events" && defined(eventDate) && eventDate.eventStartDate >= now()] | order(eventDate.eventDateStart asc) [0...5] {  _id,  eventTitle,  slug,  eventDate,  eventDescription,  eventLocation,  "image": eventImage{    "imageUrl": image.asset->url,    alt,  },}
export type LastEventQueryResult = Array<{
  _id: string;
  eventTitle: string | null;
  slug: Slug | null;
  eventDate: {
    eventStartDate?: string;
    addEndDate?: boolean;
    eventEndDate?: string;
  } | null;
  eventDescription: string | null;
  eventLocation: string | null;
  image: {
    imageUrl: string | null;
    alt: string | null;
  } | null;
}>;
// Variable: blogsQuery
// Query: *[_type == "blogs" ] | order(eventDate.eventStartDate desc) {  _id,  blogTitle,  slug,  blogContentText,  "blogImages": blogImages[] {    "imageUrl": image.asset->url,    alt,  },}
export type BlogsQueryResult = Array<{
  _id: string;
  blogTitle: string | null;
  slug: Slug | null;
  blogContentText: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  blogImages: Array<{
    imageUrl: string | null;
    alt: string | null;
  }> | null;
}>;
// Variable: blogQuery
// Query: *[_type == "blogs" && slug.current == $blog][0]{  _id,  blogTitle,  slug,  blogContentText,  "blogImages": blogImages[] {    "imageUrl": image.asset->url,    alt,  },}
export type BlogQueryResult = {
  _id: string;
  blogTitle: string | null;
  slug: Slug | null;
  blogContentText: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  blogImages: Array<{
    imageUrl: string | null;
    alt: string | null;
  }> | null;
} | null;
// Variable: lesArchivesVivantesQuery
// Query: *[_type == "lesArchivesVivantes"][0]
export type LesArchivesVivantesQueryResult = {
  _id: string;
  _type: "lesArchivesVivantes";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  linkToVimeo?: string;
  linkToPodcast?: string;
} | null;
// Variable: mainPagesContentQuery
// Query: *[_type == "main-pages" && slug.current == $pages][0] {  _id,  title,  slug,  content[] {    titleBlock,    block[] {      _type,      //intro      // "intro": intro[],                  // richtext        _id,  "richtext": text[],      // richtextTitle        _id,  "richTextTitle": title,  "richtextTitleText": text[],      // single-image        _id,  "imageTitle": title,  "imageUrl": image.asset->url,      // multi-images        _id,  "multiImages": images[] {        "imageUrl": image.asset->url,        alt,      },      // link        _id,  "linkLabel": label,  // external  external,  // internal  "internal": internal->{    _id,    _type,    title,    "slug": slug.current,  },  "mail": mail,      // lastEvent        _id,  "isDisplayed": event.isDisplayed,  "lastEventLabel": event.title,  "goToAllEvents": event.ctaToEvents,      // creationArchives        _id,  "creationArchivesTitle": intro[],  "creationArchivesArchive": archive[] {    title,    description[],    status,    },      // custom-html        _id,  "customHtml": html,  "codeTitle": codeTitle,  "isAddFiles": isAddFiles,  "fileGroup": fileGroup[] {    title,    files[] {      asset->,      },      },      // file        _id,  title,  "fileUrl": file.asset->url,  "fileName": file.asset->originalFilename,    }  }}
export type MainPagesContentQueryResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  content: Array<{
    titleBlock: null;
    block: null;
  }> | null;
} | null;
