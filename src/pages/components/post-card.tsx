export interface User {
    firstName: string;
    lastName: string;

  }

const PostCard = ({user, addCandidate}: {user: User, addCandidate: any}) => {
    return(
      <div className="bg-white text-gray-900" onClick={addCandidate}>
          <div> Photo </div>
          <div>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
          </div>

      </div>
    );
};

export default PostCard;
