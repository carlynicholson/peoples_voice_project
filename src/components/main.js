import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "../pages/home/home";
import OfficeList from "./electedOfficials/office/officeList";
import ElectedOfficialDetails from "./electedOfficials/official/electedOfficialDetails";
import RepSearchResults from "./searchForm/repSearchResults";
import About from "../pages/about/about";
import VotingLocationDetails from "./votingLocations/votingLocationDetails";
import UpcomingElections from "../pages/upcomingElections/upcompingElections";
import Contact from "../pages/contact/contact";
import DropOffLocationsDetails from "./votingLocations/dropOffLocations/dropOffLocationsDetails";
import EarlyVoteSiteDetails from "./votingLocations/earlyVoteSites/earlyVoteSiteDetails";
import PollingLocationsDetails from "./votingLocations/pollingLocations/pollingLocationsDetails";
import AdditionResourceDetails from "./votingLocations/additionalResources/additionalResourcesDetails";

export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/upcomingElections" component={UpcomingElections}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/contact" component={Contact}/>
			<Route exact path="/electedOffices" component={RepSearchResults}/>
			<Route exact path="/office" component={OfficeList}/>
			<Route exact path="/official" component={ElectedOfficialDetails}/>
			<Route exact path={"/votingLocations"} component={VotingLocationDetails}/>
			<Route exact path={'/dropOffSites'} component={DropOffLocationsDetails}/>
			<Route exact path={'/earlyVoteSites'} component={EarlyVoteSiteDetails}/>
			<Route exact path={'/pollingLocations'} component={PollingLocationsDetails}/>
			<Route exact path={'/additionalResources'} component={AdditionResourceDetails}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
