import Dashboard from "views/Dashboard.js";
import CervicalCancer from "views/CervicalCancerPage";
import ClinicalOVC from "views/ClinicalOVCPage";
import ConsolidatedAnalytics from "views/ConsolidatedAnalyticsFH";
import DreamsBiWeekly from "views/DreamsBiWeelklyPage";
import IndexTesting from "views/IndexTestingPage";
import JuaMtotoWako from "views/JuaMtotoWakoPage";
import Malaria from "views/MalariaPage";
import NeonatalMortality from "views/NeonatalMortalityPage";
import PerformanceSummary from "views/PerfomanceSummaryPage";
import PostNatalCare from "views/PostNatalCarePage";
import ResponsiveIndicator from "views/ResponsiveIndicators";
import SkilledBirthAttendant from "views/SkilledBirthAttendant";
import Underweight from "views/Underweight";
import GBV from "views/GBVPage";
import HFRMonthly from "views/HFRMonthlyPage";

var familyHealthRoutes = [

  {
    path: "/consolidated-analytics",
    name: "Consolidated Analytics FH",
    component: <ConsolidatedAnalytics />,
    layout: "/admin",
  },
  {
    path: "/gbv",
    name: "GBV",
    component: <GBV />,
    layout: "/admin",
  },
  {
    path: "/malaria",
    name: "Malaria",
    component: <Malaria />,
    layout: "/admin",
  },
  {
    path: "/perfomance-summary",
    name: "Perfomance Summary",
    component: <PerformanceSummary />,
    layout: "/admin",
  },
];

// Family Health Routes
var routes = [
  {
    path: "/neonatal-mortality",
    name: "Neonatal Mortality",
    component: <NeonatalMortality />,
    layout: "/admin",
  },
  {
    path: "/post-natal-care",
    name: "PostNatal Care",
    component: <PostNatalCare />,
    layout: "/admin",
  },
  {
    path: "/skilled-birth-attendant",
    name: "Skilled Birth Attendant",
    component: <SkilledBirthAttendant />,
    layout: "/admin",
  },
  {
    path: "/underweight",
    name: "Underweight",
    component: <Underweight />,
    layout: "/admin",
  },
  {
    path: "/responsive-indicator",
    name: "Responsive Indicators",
    component: <ResponsiveIndicator />,
    layout: "/admin",
  },
];

// HiV Program Routes
var hiVProgramRoutes = [
  {
    path: "/hfr-monthly",
    name: "HFR Monthly",
    component: <HFRMonthly />,
    layout: "/admin",
  },
  {
    path: "/clinical-ovc",
    name: "Clinical OVC",
    component: <ClinicalOVC />,
    layout: "/admin",
  },
  {
    path: "/dreams-biweekly",
    name: "Dreams BiWeekly",
    component: <DreamsBiWeekly />,
    layout: "/admin",
  },
  {
    path: "/cervical-cancer",
    name: "Cervical Cancer",
    component: <CervicalCancer />,
    layout: "/admin",
  },
  {
    path: "/index-testing",
    name: "Index Testing",
    component: <IndexTesting />,
    layout: "/admin",
  },
  {
    path: "/jua-mtoto-wako",
    name: "Jua Mtoto Wako",
    component: <JuaMtotoWako />,
    layout: "/admin",
  },
];

export { routes, familyHealthRoutes, hiVProgramRoutes };
