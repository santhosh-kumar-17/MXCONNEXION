import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'> MX-CONNEXIONS</h1>

          <p className='lead'>
            Create Alumni profile/portfolio, share posts and interact with other students of the MCA Department.
            An Engaging online platform with Student-Alumni Interaction in an online community.
            
          </p>

          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>

            <Link to='/login' className='btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
