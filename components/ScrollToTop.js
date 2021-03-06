import PropTypes from 'prop-types';

const ScrollToTop = ({
    isVisible,
    onClick,
}) => (
    <div
        className="scroll-to-top d-lg-none position-fixed"
        style={{
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? 'visible' : 'hidden',
            transition: '0.5s',
        }}
    >
        <a
            className=" d-block text-center text-white rounded"
            href="#page-top"
            onClick={onClick}
        >
            <i className="fas fa-chevron-up"></i>
        </a>
    </div>
);

ScrollToTop.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
};

export default ScrollToTop;
