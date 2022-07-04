# Loader using Cloudinary
https://cloudinary.com/

# Layout values definition

We can crop our image to fit the desired dimensions using the optional layout prop. It
accepts four different values: fixed, intrinsic, responsive, and fill. Let's look at
these in more detail:
- `fixed` works just like the img HTML tag. If we change the viewport size, it will
keep the same size, meaning that it won't provide a responsive image for smaller (or
bigger) screens.
- `responsive` works in the opposite way to fixed; as we resize our viewport, it
will serve differently optimized images for our screen size.
- `intrinsic` is halfway between fixed and responsive; it will serve different
image sizes as we resize down our viewport, but it will leave the largest image
untouched on bigger screens.
- `fill` will stretch the image according to its parent element's width and height;
however, we can't use fill alongside the width and height props. You can use
fill or width and height).