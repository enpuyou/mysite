import React from "react";
import ReactDOM from "react-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

const Item = ({ excerpt, image, tags, slug, title, timeToRead }) => (
  <Tile>
    <a href={slug}>
      {image ? <Img sizes={image.childImageSharp.sizes} /> : <div />}
    </a>
    <TileContent href={slug}>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </TileContent>
  </Tile>
);

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flickityReady: false,
    };

    this.refreshFlickity = this.refreshFlickity.bind(this);
  }

  componentDidMount() {
    this.flickity = new Flickity(this.flickityNode, this.props.options || {});

    this.setState({
      flickityReady: true,
    });
  }

  refreshFlickity() {
    this.flickity.reloadCells();
    this.flickity.resize();
    this.flickity.updateDraggable();
  }

  componentWillUnmount() {
    this.flickity.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    const flickityDidBecomeActive =
      !prevState.flickityReady && this.state.flickityReady;
    const childrenDidChange =
      prevProps.children.length !== this.props.children.length;

    if (flickityDidBecomeActive || childrenDidChange) {
      this.refreshFlickity();
    }
  }

  renderPortal() {
    if (!this.flickityNode) {
      return null;
    }

    const mountNode = this.flickityNode.querySelector(".flickity-slider");

    if (mountNode) {
      return ReactDOM.createPortal(this.props.children, mountNode);
    }
  }

  render() {
    // added from portfolio
    const items = this.props.items.map((item) => (
      <Item
        key={item.node.fields.slug}
        excerpt={item.node.excerpt}
        slug={item.node.fields.slug}
        timeToRead={item.node.timeToRead}
        {...item.node.frontmatter}
      />
    ));

    return [
      <div
        className={"test"}
        key="flickityBase"
        ref={(node) => (this.flickityNode = node)}
      />,
      this.renderPortal(),
    ].filter(Boolean);
  }
}
