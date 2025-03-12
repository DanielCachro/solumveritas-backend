import type { Schema, Struct } from '@strapi/strapi';

export interface BlogComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'>;
  };
}

export interface BlogComponentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_text_blocks';
  info: {
    description: '';
    displayName: 'TextBlock';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-component.image': BlogComponentImage;
      'blog-component.text-block': BlogComponentTextBlock;
    }
  }
}
