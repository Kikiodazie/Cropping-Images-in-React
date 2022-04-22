import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

// Import required actions, qualifiers and values.
import {
  crop,
  thumbnail,
  imaggaCrop
} from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";

const App = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    }
  });

  const imageToCropToSpecifiedDimension = cld.image("store");
  const imageToCropToThumbnail = cld.image("man");
  const imageToCropWithImagga = cld.image("beach");

  imageToCropToSpecifiedDimension.resize(crop().width(300).height(300));

  imageToCropToThumbnail.resize(
    thumbnail().width(300).height(300).gravity(focusOn(face()))
  );

  imageToCropWithImagga.resize(imaggaCrop());

  return (
    <>
      <div>
        <h2>Crop To Specified Dimension</h2>
        <AdvancedImage cldImg={imageToCropToSpecifiedDimension} />
      </div>

      <br />

      <div>
        <h2>Thumbnail Crop</h2>
        <AdvancedImage cldImg={imageToCropToThumbnail} />
      </div>

      <br />
      <br />

      <div>
        <h2>Imagga Crop</h2>
        <AdvancedImage cldImg={imageToCropWithImagga} />
      </div>
    </>
  );
};

export default App;
