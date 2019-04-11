import React, { Component } from "react";
import PropTypes from "prop-types";
// import RimbleUtils from "rimble-utils";
import { Box, Flex, Icon, Text } from "rimble-ui";

class ConnectionBanner extends Component {
  static propTypes = {
    currentNetwork: PropTypes.number,
    requiredNetwork: PropTypes.number
  };

  render() {
    const { text } = this.props;

    const bannerStyle = {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      backgroundColor: "white"
    };

    return (
      <Box style={bannerStyle} p={3}>
        <Flex alignItems={"center"}>
          <Box p={4}>
            <Icon name="Warning" color="gold" size="30" />
          </Box>
          <Flex flexDirection={"column"}>
            <Text fontWeight={"bold"}>
              Looks like you're on the wrong network
            </Text>
            <Text>
              You should be on the _____ network. You are currently connected to
              the{" "}
              <Text.span style={{ textTransform: "capitalize" }}>
                _______
              </Text.span>{" "}
              Network - switch in your MetaMask extension.
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export { ConnectionBanner };
