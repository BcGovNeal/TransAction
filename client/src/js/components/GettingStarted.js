import React from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row, Button, Card, CardBody, CardHeader, CardFooter, CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';

import EditTeamForm from './forms/EditTeamForm';
import CardWrapper from './ui/CardWrapper';
import BreadcrumbFragment from './fragments/BreadcrumbFragment';

import * as api from '../api/api';
import * as Constants from '../Constants';

class GettingStarted extends React.Component {
  state = { showCreateTeamForm: false };

  componentDidMount() {
    api.resetCancelTokenSource();
  }

  componentWillUnmount() {
    api.cancelRequest();
  }

  showCreateTeamForm = () => {
    this.setState({ showCreateTeamForm: true });
  };

  toggleCreateTeamForm = () => {
    this.setState((prevState) => ({
      showCreateTeamForm: !prevState.showCreateTeamForm,
    }));
  };

  renderText() {
    return (
      <CardWrapper>
        <Row>
          <Col>
            <h4>How does TransAction Wellness work?</h4>
            <p>
              You participate in TransAction Wellness by creating or becoming a member of a team, or participating on
              your own. A team is composed of a leader and up to four team members. You can join a team or make yourself
              available to join any team in the ministry by becoming a Free Agent.
            </p>

            <p>
              Individuals enter daily activity time in TransAction Wellness, and you can monitor your team's progress on
              the homepage. All activities for this event hold the same low intensity level. This is not a competitive
              event. It is a tool to help encourage you to make healthy choices throughout the month of June.
            </p>
            <p>
              You can view your activity log entries on the calendar. More information can be found in the{' '}
              <Link to={Constants.PATHS.FAQ}>FAQ</Link> section of this webpage.
            </p>
          </Col>
        </Row>
        {!this.props.currentUser.teamId ? (
          <Row className="mt-5">
            <Col>
              <CardDeck>
                <Card>
                  <CardHeader>
                    <h5>Team Leader</h5>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Contact your future teammates and unharness your motivational skills to get them to register and
                      join the selection pool (see "Regular Team Members" below). Then Register yourself and go to Team
                      Information, where you can name and pick your team mates from the selection pool. Contact your
                      potential team members so you can "pick them up" as soon as they register. Create a unique team
                      profile. Go crazy.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={this.showCreateTeamForm}>
                      Create Team
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <h5>Team Member</h5>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Decide if you want to be on a team of people you know, or whether you'd like to be a "free agent".
                      Free agents can get picked up by any team. Either way, you have to Register first, then join the
                      Selection Pool. Once you've done that, contact your leader and tell them to "get me the heck on
                      your team". Your leader, being the highly efficient, motivated coach they are, will immediately
                      "pick you up". Of course, sending a basket of fruit may help speed up this process. Free Agents
                      can get picked up by any Team Leader anywhere in the ministry.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Link to={Constants.PATHS.TEAM}>
                      <Button color="primary">Join Team</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CardDeck>
              <Alert color="primary" className="mt-5">
                <p>
                  The personal information is collected by the Ministry of Transportation and Infrastructure under s.26(
                  c) of the Freedom of Information and Protection of Privacy Act ("FOIPPA") for the purposes of enabling
                  ministry employees to participate in TransAction.
                </p>
                <p>
                  Should you have any questions about the collection of this personal information, please contact:
                  <br />
                  Manager, Workforce Programs,
                  <br />
                  Strategic HR Suite 5A - 940 Blanshard Street,
                  <br />
                  Victoria BC, VSW 9T5
                  <br />
                  778-678-4691
                </p>
              </Alert>
            </Col>
          </Row>
        ) : (
          <Alert color="warning">
            You are already on a team. Please head to the <Link to={Constants.PATHS.EVENT}>Events</Link> page to
            participate in an event.
          </Alert>
        )}
      </CardWrapper>
    );
  }

  render() {
    return (
      <React.Fragment>
        <BreadcrumbFragment>{[{ active: true, text: 'Getting Started' }]}</BreadcrumbFragment>
        {this.renderText()}
        {this.state.showCreateTeamForm && (
          <EditTeamForm
            isOpen={this.state.showCreateTeamForm}
            toggle={this.toggleCreateTeamForm}
            initialValues={{ goal: 0 }}
            formType={Constants.FORM_TYPE.ADD}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.all[state.users.current.id],
  };
};

export default connect(mapStateToProps, null)(GettingStarted);
