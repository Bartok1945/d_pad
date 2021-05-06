import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import PlaylistBox from "../../components/PlaylistBox/PlaylistBox";
import API from "../../utils/API";

const PlaylistPage = () => {

  useEffect(() => {
    API.getUser()
    .then((res) => console.log("get user res =>", res))
    .catch((err) => console.log(err))
  })

    return (
      <PageWrapper>
        <Bar/>
        <PlaylistBox/>
      </PageWrapper>
    );
  }


export default PlaylistPage;
