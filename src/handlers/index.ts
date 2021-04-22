import createWhoamiAPIHandler  from "./api-get-whoami";
import createMetadataAPIHandler from "./api-post-metadata";
import createTimestampAPIHandler  from "./api-get-timestamp";
import getMetadataServicePage from "./get-metadata-service-page";
import TimestampService from "../services/timestamp";
import MetadataService  from "../services/metadata";
import WhoamiService  from "../services/whoami";

export default {
  metdataServicePage: getMetadataServicePage,
  api: {
    whoami: createWhoamiAPIHandler(new WhoamiService()),
    timestamp: createTimestampAPIHandler(new TimestampService()),
    metadata: createMetadataAPIHandler(new MetadataService()),
  }
}