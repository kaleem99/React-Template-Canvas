import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  Animated,
  Alert,
} from "react-native";

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      zIndex: 0,
      color: "white",
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        console.log("moving", this.props.index);
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value,
        });
        this.state.pan.setValue({ x: 0, y: 0 });
        Animated.spring(this.state.scale, {
          toValue: 1.1,
          friction: 3,
        }).start();

        this.setState({ color: "blue", zIndex: 100 });
      },

      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),

      onPanResponderRelease: (e, gesture) => {
        this.state.pan.flattenOffset();
        // de-scale
        Animated.spring(this.state.scale, { toValue: 1, friction: 3 }).start();

        this.setState({ color: "white", zIndex: 0 });

        let dropzone = this.inDropZone(gesture);
        if (dropzone) {
          // plop into dropzone
          // console.log(dropzone.y-this.layout.y, this.state.pan.y._value, dropzone.y);
          console.log(
            "grabbed",
            this.props.index,
            " => dropped",
            dropzone.index
          );
          Animated.spring(this.state.pan, {
            toValue: {
              x: 0,
              y: dropzone.y - this.layout.y,
            },
          }).start();
          if (this.props.index !== dropzone.index) {
            this.props.swapItems(
              this.props.index,
              dropzone.index,
              dropzone.y - this.layout.y
            );
          }
        } else {
          // spring back to start
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
  }

  inDropZone(gesture) {
    var isDropZone = false;
    for (var dropzone of this.props.dropZoneValues) {
      if (
        gesture.moveY > dropzone.y &&
        gesture.moveY < dropzone.y + dropzone.height
      ) {
        isDropZone = dropzone;
      }
    }
    return isDropZone;
  }

  setDropZoneValues(event) {
    this.props.setDropZoneValues(
      event.nativeEvent.layout,
      this.props.index,
      this
    );
    this.layout = event.nativeEvent.layout;
    this.layout.index = this.props.index;
  }

  render() {
    let { pan, scale, zIndex, color } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = "0deg";
    let imageStyle = {
      transform: [{ translateX }, { translateY }, { rotate }, { scale }],
    };

    return (
      <View
        style={[styles.dropzone]}
        onLayout={this.setDropZoneValues.bind(this)}
      >
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            imageStyle,
            styles.draggable,
            { backgroundColor: color, zIndex },
          ]}
        >
          <Text>{this.props.index}</Text>
          <Text>{this.props.char}</Text>
          <Text>
            {this.state.color} {this.state.zIndex}
          </Text>
        </Animated.View>
      </View>
    );
  }
}

Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

Array.prototype.clone = function () {
  return this.slice(0);
};

const items = ["shiba inu", "labrador"];

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items,
      dropZoneValues: [],
      dropzones: [],
    };
  }

  setDropZoneValues(layout, index, dropzone) {
    layout.index = index;
    this.setState({
      dropZoneValues: this.state.dropZoneValues.concat(layout),
    });
    this.setState({
      dropzones: this.state.dropzones.concat(dropzone),
    });
  }

  swapItems(i1, i2, y) {
    console.log("swapping", i1, i2);
    var height =
      y < 0
        ? this.state.dropzones[i1].layout.height
        : -this.state.dropzones[i1].layout.height;
    Animated.spring(this.state.dropzones[i2].state.pan, {
      toValue: {
        x: 0,
        y: -y - height,
      },
    }).start();
    var clone = this.state.items.clone();
    console.log(clone);
    clone.swap(i1, i2);
    console.log(clone);
    this.setState({
      items: clone,
    });
  }

  render() {
    console.log("state", this.state);
    
    return (
      <View style={styles.container}>
        {this.state.items.map((i, index) => (
          <Draggable
            key={index}
            dropZoneValues={this.state.dropZoneValues}
            setDropZoneValues={this.setDropZoneValues.bind(this)}
            char={i}
            index={index}
            swapItems={this.swapItems.bind(this)}
          />
        ))}
        <View style={{ zIndex: 100, backgroundColor: "red" }}>
          <Text>foo</Text>
        </View>
        <View style={{ zIndex: -100, top: -10, backgroundColor: "blue" }}>
          <Text>bar</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  dropzone: {
    // margin: 5,
    zIndex: -100,
    width: 106,
    height: 106,
    borderColor: "green",
    borderWidth: 3,
    backgroundColor: "lightgreen",
  },
  draggable: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
  image: {
    width: 75,
    height: 75,
  },
});

export default Playground;
