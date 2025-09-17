import type { Schema, Struct } from '@strapi/strapi';

export interface PageComponentPhoto extends Struct.ComponentSchema {
  collectionName: 'components_page_component_photos';
  info: {
    displayName: 'Photo';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface PageComponentText extends Struct.ComponentSchema {
  collectionName: 'components_page_component_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-component.photo': PageComponentPhoto;
      'page-component.text': PageComponentText;
    }
  }
}
