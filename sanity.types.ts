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

export type CustomExternalLink = {
  _id: string;
  _type: "customExternalLink";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  url?: string;
};

export type CustomImage = {
  _id: string;
  _type: "customImage";
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

export type CustomFile = {
  _id: string;
  _type: "customFile";
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

export type CustomText = {
  _id: string;
  _type: "customText";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: string;
};

export type Sections = {
  _id: string;
  _type: "sections";
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
        [internalGroqTypeReferenceTo]?: "customFile";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "customText";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "customImage";
      }
    | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "customExternalLink";
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

export type Footer = {
  _id: string;
  _type: "footer";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Homepage = {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero?: {
    heading?: string;
    description?: string;
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
    ctatext?: string;
    cta?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "pages";
    };
  };
  modules?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "sections";
  }>;
};

export type Pages = {
  _id: string;
  _type: "pages";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "sections";
  }>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Header = {
  _id: string;
  _type: "header";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
  links?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "pages";
  }>;
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
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: settingsQuery
// Query: *[_type == "settings"][0]
export type SettingsQueryResult = null;
// Variable: headerQuery
// Query: *[_type == "header"] {  "imageUrl": logo.asset->url,  "url": links[]->{     title,     "slug": slug.current  }}
export type HeaderQueryResult = Array<{
  imageUrl: string | null;
  url: Array<{
    title: string | null;
    slug: string | null;
  }> | null;
}>;
// Variable: footerQuery
// Query: *[_type == "footer"][0] {  title,}
export type FooterQueryResult = {
  title: string | null;
} | null;
// Variable: heroQuery
// Query: *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {  content,    _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), picture},}
export type HeroQueryResult = null;
// Variable: moreStoriesQuery
// Query: *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {    _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), picture},}
export type MoreStoriesQueryResult = Array<never>;
// Variable: postQuery
// Query: *[_type == "post" && slug.current == $slug] [0] {  content,    _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{"name": coalesce(name, "Anonymous"), picture},}
export type PostQueryResult = null;
// Variable: pagesContentQuery
// Query: *[_type == "pages" && slug.current == $slug] [0] {  _id,  title,  slug,  "sections": content[]->{      _id,  _type,  title,  slug,  "content": content[]{    _ref,    _type,    title,    content,    "imageUrl": image.asset->url,    "url": url,  }  },}
export type PagesContentQueryResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  sections: Array<{
    _id: string;
    _type: "sections";
    title: string | null;
    slug: Slug | null;
    content: Array<{
      _ref: string;
      _type: "reference";
      title: null;
      content: null;
      imageUrl: null;
      url: null;
    }> | null;
  }> | null;
} | null;
// Variable: sectionQuery
// Query: *[_type == "sections" && slug.current == $slug] [0] {  _id,  _type,  title,  slug,  "content": content[]{    _ref,    _type,    title,    content,    "imageUrl": image.asset->url,    "url": url,  }}
export type SectionQueryResult = {
  _id: string;
  _type: "sections";
  title: string | null;
  slug: Slug | null;
  content: Array<{
    _ref: string;
    _type: "reference";
    title: null;
    content: null;
    imageUrl: null;
    url: null;
  }> | null;
} | null;
// Variable: homepageQuery
// Query: *[_type == "homepage"][0] {  hero {    heading,    description,    ctatext,    "imageUrl": image.asset->url,    "url": cta->slug,  },    "modules": modules[]->{      _id,  _type,  title,  slug,  "content": content[]{    _ref,    _type,    title,    content,    "imageUrl": image.asset->url,    "url": url,  }  }}
export type HomepageQueryResult = {
  hero: {
    heading: string | null;
    description: string | null;
    ctatext: string | null;
    imageUrl: string | null;
    url: Slug | null;
  } | null;
  modules: Array<{
    _id: string;
    _type: "sections";
    title: string | null;
    slug: Slug | null;
    content: Array<{
      _ref: string;
      _type: "reference";
      title: null;
      content: null;
      imageUrl: null;
      url: null;
    }> | null;
  }> | null;
} | null;
