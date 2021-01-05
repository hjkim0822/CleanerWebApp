import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

export default function home() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"5ljirxjo9g"}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"}
        style={{ width: "100%", height: "400px" }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  );
}
