import  createTimestampHandler  from "./timestamp";
import  createWhoamiHandler  from "./whoami";
import getMetadataService from "./get-metadata-service";
import { TimestampService } from "../services/timestamp";
import { WhoamiService } from "../services/whoami";

export default {
  timestamp: createTimestampHandler(new TimestampService()),
  whoami: createWhoamiHandler(new WhoamiService()),
  metadataService: getMetadataService
}