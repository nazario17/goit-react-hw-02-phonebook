import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

export const ContactList = ({ users, deleteContact }) => {
    return (
        <>
            <ul className="contact-list">
                {users.map(user => (
                    <li className="contact-item" key={user.id}>
                        {user.name} : {user.number}
                        <button onClick={() => deleteContact(user.id)}>Delete</button>
                    </li>
                ))}
        </ul>
        </>
    )
};

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
