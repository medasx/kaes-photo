# Images

Drop your photos into this directory and update `index.html` to reference them.

## How to replace placeholders

In `index.html`, find placeholder `<div>` elements like:

```html
<div class="placeholder placeholder-landscape"><span>Moto photo 1</span></div>
```

Replace them with an `<img>` tag:

```html
<img src="images/moto-photo-1.jpg" alt="Moto photo 1" loading="lazy">
```

## Recommended image sizes

- **Landscape**: 1200x800px
- **Portrait**: 800x1200px
- **Square**: 800x800px

Use JPEG for photos, WebP for better compression. Keep files under 500KB each for fast loading.
