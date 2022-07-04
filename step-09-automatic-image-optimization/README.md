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

# Loader (Thumbor) Security

1. Generate a `signature` of that part using `HMAC-SHA1` with the `SECURITY_KEY`.
2. Encode the `signature` as `base64`. thumbor uses `urlsafe_b64encode` method of the native `python’s base64 module`. This method replaces some characters in the base64 string so it becomes more url friendly.
3. Append the encoded_signature to the beginning of the URL, like: `/1234567890123456789012345678/300x200/smart/path/to/image.jpg`.

That last part gives you the new url: `http://thumbor-server/1234567890123456789012345678/300x200/smart/path/to/image.jpg`. Notice that the url includes the options part 300x200/smart. That’s required for thumbor to generate an authentication code to match the one that signs the image (1234567890123456789012345678).