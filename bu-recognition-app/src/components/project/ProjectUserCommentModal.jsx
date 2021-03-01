import React, { Fragment, useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HomeContext } from '../../common/context/home-context';
import { commentApi } from '../../apis/comment.api';

const ProjectUserCommentModal = () => {
  const { state, dispatch } = useContext(HomeContext);

  const [content, setContent] = useState(state.selectedUser.content);

  useEffect(() => {
    setContent(state.selectedUser.content ? state.selectedUser.content : '');
  }, [state.isModalShow]);

  const currentDate = moment().format('MMM Do, yyyy');

  const handleClose = () => {
    dispatch({ type: 'toggleModal', isModalShow: false });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.selectedUser.commentId) {
      commentApi.create({
        commentReceiverId: state.selectedUser.userId,
        content: content,
        projectId: state.selectedUser.projectId
      }).then(res => {
        dispatch({ type: 'toggleModal', isModalShow: false, toggleReaction: !state.toggleReaction });
      });
    }
    else {
      commentApi.update({
        id: state.selectedUser.commentId,
        content: content,
        isDeleted: false
      }).then(res => {
        dispatch({ type: 'toggleModal', isModalShow: false, toggleReaction: !state.toggleReaction });
      });
    }
  }

  return (
    <Fragment>
      <Modal show={state.isModalShow} onHide={handleClose} centered>
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>
            <div className="media">
              <img className="user-avatar mr-3" src={process.env.PUBLIC_URL + '/user.png'} width="48" />
              <div className="media-body">
                <div><b>{state.selectedUser.lastName} {state.selectedUser.firstName}</b> ({state.selectedUser.username})</div>
                <div><small>{state.selectedUser.projectRole}</small></div>
                <div className="mt-2"><small><b className="text-muted">Hire date:</b>&nbsp; {currentDate}</small></div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <textarea className="form-control comment-input" rows="4" placeholder="Send a few words to your colleague" value={content}
                onChange={e => setContent(e.target.value)}></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" onClick={handleClose} className="btn"><span className="text-muted"><FontAwesomeIcon icon={['fa', 'heart-broken']} />&nbsp; Not Now</span></button>
            <button type="submit" className="btn"><FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; Recognize</button>
          </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
}

export default ProjectUserCommentModal;
