import "../css/main.scss";
import "../video/SatelliteDishHdr.mp4";
import "normalize.css";
import "animate.css";

import { filter } from "./filter/filter";
import { scroll } from "./scroll/scroll";
import { menu } from "./menu/menu";
import {calendar} from "./calendar/calendar";
import {analytics} from "./analytics/analytics";
// import { api } from "./api/api";

filter();
scroll();
// api();
menu();
calendar();
analytics();
