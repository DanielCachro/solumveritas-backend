import type { Schema, Struct } from '@strapi/strapi';

export interface BlogComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
  };
}

export interface BlogComponentImageContain extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_image_contains';
  info: {
    description: '';
    displayName: 'ImageContain';
    icon: 'collapse';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface BlogComponentPureText extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_pure_texts';
  info: {
    displayName: 'PureText';
    icon: 'file';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
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
      'blog-component.image-contain': BlogComponentImageContain;
      'blog-component.pure-text': BlogComponentPureText;
      'blog-component.text-block': BlogComponentTextBlock;
    }
  }
}
