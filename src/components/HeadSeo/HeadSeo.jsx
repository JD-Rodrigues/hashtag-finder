import React from "react";
const HeadTitle = (props) => {
  React.useEffect(() => {
    document.title = ` Hashtag Finder | ${props.title} `;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, [props]);

};
export default HeadTitle;
