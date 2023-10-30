import gql from "graphql-tag";
const DATA_QUERY = gql`
query Assets {
  assets {
    createdAt
    id
    subHeading
    content
    mainMobileImg {
      url
    }
  
    circleContent
    circleImg {
      url
    }
    networkContent
     networkImg {
       url
     }
    computerContent
    computerImg {
      url
    }
    wifiContent
    wifiImg {
      url
    }
    subHeading2
    subHeading3
    data1
    data2
    data3
    data4
    data5
    data6
    dataContent
    dataDetails
    dataMiniHeading
    button1
    dep1
    dep2
    dep3
    dep4
    dep5
    dep6
    dep7
    depHeading
    depContent
    depDetails
    ser1
    ser2
    ser3
    ser4
    ser5
    serHeading
    serContent
    serDetails
    aws1
    aws2
    aws3
    aws4
    aws5
    aws6
    aws7
    awsHeading
    awsContent
    awsDetails
    app1
    app2
    app3
    app4
    app5
    app6
    appHeading
    appContent
    appDetails
    cata1
    cata2
    cata3
    cata4
    catalogHeading
    catalogContent
    catalogDetails
    hydbutton
    bagbutton
    hyd
    hydExp
    hydPos
    banglore
    usa
    new {
      url
    }
    footerImg {
      url
    }
    footerContent
    footerKey
    footerAbout
    footerService
    footerCarrers
    footerCsr
    footerSolutions
    footerContact
    footerGet
    footerLocation
    footerMail
    footerFollow
    footerYoutube {
      url
    }
    footerFacebook {
      url
    }
    footerLink {
      url
    }
    publishedAt
    fileName
    url
    updatedAt
  }
}`;
  export default DATA_QUERY;