import React, { useState } from 'react'
import './mainpage.css'
import { useNavigate } from 'react-router-dom';
export default function MainPage() {
  const navigate = useNavigate();
  const [showNoti,setShowNoti] = useState(false)
  const logout=()=>{
    navigate('/register')
  }
  return (
    
    <div>
  <nav>
    <div className="container">
      {/* tien */}
      <h2 className="logo">TienLD</h2>
      <div className="search-bar">
        <i className="uil uil-search" />
        <input
          type="search"
          placeholder="Search for creators, inspirations, and projects"
        />
      </div>
      <div className="create">
        <div className="profile-photo">
          <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" alt="" />
        </div>
        <button onClick={logout} className="btn btn-primary">
          Log out
        </button>
      </div>
    </div>
  </nav>
  {/*------------------------------ MAIN ---------------------------------*/}
  <main>
    <div className="container">
      {/*--------------- LEFT ------------------*/}
      <div className="left">
        <a className="profile">
          <div className="profile-photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
          </div>
          <div className="handle">
            <h4>Nia Ridania</h4>
            <p className="text-muted">@niaridania</p>
          </div>
        </a>
        {/*--------------- SIDEBAR ------------------*/}
        <div className="sidebar">
          <a className="menu-item active">
            <span>
              <i className="uil uil-home" />
            </span>
            <h3>Home</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-compass" />
            </span>
            <h3>Explore</h3>
          </a>
          <a className="menu-item" id="notifications">
            <span>
              <i className="uil uil-bell">
                <small className="notification-count">9+</small>
              </i>
            </span>
            <h3>Notification</h3>
          </a>
          <a className="menu-item" id="messages-notifications">
            <span>
              <i className="uil uil-envelope-alt">
                <small className="notification-count">6</small>
              </i>
            </span>
            <h3>Messages</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-bookmark" />
            </span>
            <h3>Bookmarks</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-chart-line" />
            </span>
            <h3>Analytics</h3>
          </a>
          <a className="menu-item" id="theme">
            <span>
              <i className="uil uil-palette" />
            </span>
            <h3>Theme</h3>
          </a>
          <a className="menu-item">
            <span>
              <i className="uil uil-setting" />
            </span>
            <h3>Setting</h3>
          </a>
        </div>
        {/*--------------- END OF SIDEBAR ------------------*/}
        <label className="btn btn-primary" htmlFor="create-post">
          Create Post
        </label>
      </div>
      {/*--------------- MIDDLE ------------------*/}
      <div className="middle">
        {/*--------------- STORIES ------------------*/}
        <div className="stories">
          <div className="story">
            <div className="profile-photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <p className="name">Your Story</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <p className="name">Lila James</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <p className="name">Winnie Haley</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <p className="name">Daniel Bale</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <p className="name">Jane Doe</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <p className="name">Tina White</p>
          </div>
        </div>
        {/*--------------- END OF STORIES ------------------*/}
        <form action="" className="create-post">
          <div className="profile-photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind, Diana ?"
            id="create-post"
          />
          <input
            type="submit"
            defaultValue="Post"
            className="btn btn-primary"
          />
        </form>
        {/*--------------- FEEDS ------------------*/}
        <div className="feeds">
          {/*--------------- FEED 1 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
                </div>
                <div className="info">
                  <h3>Lana Rose</h3>
                  <small>Dubai, 15 Minutes Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Fprofile-1.jpg?alt=media&token=8e8adb10-80a7-4693-8494-97155a6a3dbc" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
              </span>
              <span>
                <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
              </span>
              <span>
                <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
              </span>
              <p>
                Liked by <b>Ernest Achiever</b> and <b>2, 323 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius.
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 277 comments</div>
          </div>
          {/*--------------- END OF FEED 1 ------------------*/}
          {/*--------------- FEED 2 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
                </div>
                <div className="info">
                  <h3>Clara Dwayne</h3>
                  <small>Miami, 2 Hours Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
              </span>
              <span>
                <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
              </span>
              <span>
                <img src="https://firebasestorage.googleapis.com/v0/b/ptit-729c7.appspot.com/o/images%2Ffeed-1.jpg?alt=media&token=6f9ba9a1-f08c-40bf-9b03-bd104fc22f18" />
              </span>
              <p>
                Liked by <b>Diana Rose</b> and <b>2, 323 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Clara Dwayne</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam, fugiat? Ipsam voluptatibus beatae
                facere eos harum voluptas distinctio, officia, facilis sed
                quisquam esse, assumenda minima ut. Excepturi sit quis
                reiciendis!
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 100 comments</div>
          </div>
          {/*--------------- END OF FEED 2 ------------------*/}
          {/*--------------- FEED 3 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-4.jpg" />
                </div>
                <div className="info">
                  <h3>Rosalinda Clark</h3>
                  <small>New York, 50 Minutes Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="./images/feed-4.jpg" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="./images/profile-12.jpg" />
              </span>
              <span>
                <img src="./images/profile-13.jpg" />
              </span>
              <span>
                <img src="./images/profile-14.jpg" />
              </span>
              <p>
                Liked by <b>Clara Dwayne</b> and <b>2, 323 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Rosalinda Clark</b> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quo ullam, quam voluptatibus natus ex corporis
                ea atque quisquam, necessitatibus, cumque eligendi aliquam nulla
                soluta hic. Obcaecati, tempore dignissimos! Esse cupiditate
                laborum ullam, quae necessitatibus, officiis, quaerat aspernatur
                illo voluptatum repellat perferendis voluptatem similique.
                Assumenda nostrum, eius sit laborum nesciunt deserunt!
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 50 comments</div>
          </div>
          {/*--------------- END OF FEED 3 ------------------*/}
          {/*--------------- FEED 4 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-5.jpg" />
                </div>
                <div className="info">
                  <h3>Alexandria Riana</h3>
                  <small>Dubai, 1 Hour Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="./images/feed-5.jpg" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="./images/profile-10.jpg" />
              </span>
              <span>
                <img src="./images/profile-4.jpg" />
              </span>
              <span>
                <img src="./images/profile-15.jpg" />
              </span>
              <p>
                Liked by <b>Lana Rose</b> and <b>5, 323 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Alexandria Riana</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Modi architecto sunt itaque, in, enim non
                doloremque velit unde nihil vitae impedit dolorum, distinctio ab
                deleniti!
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 540 comments</div>
          </div>
          {/*--------------- END OF FEED 4 ------------------*/}
          {/*--------------- FEED 5 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-7.jpg" />
                </div>
                <div className="info">
                  <h3>Keylie Hadid</h3>
                  <small>Dubai, 3 Hours Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="./images/feed-7.jpg" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="./images/profile-10.jpg" />
              </span>
              <span>
                <img src="./images/profile-4.jpg" />
              </span>
              <span>
                <img src="./images/profile-15.jpg" />
              </span>
              <p>
                Liked by <b>Riana Rose</b> and <b>1, 226 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Keylie Hadid</b> Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Autem obcaecati nisi veritatis quisquam eius
                accusantium rem quo repellat facilis neque.
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 199 comments</div>
          </div>
          {/*--------------- END OF FEED 5 ------------------*/}
          {/*--------------- FEED 6 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-15.jpg" />
                </div>
                <div className="info">
                  <h3>Benjamin Dwayne</h3>
                  <small>New York, 5 Hours Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="./images/feed-2.jpg" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="./images/profile-10.jpg" />
              </span>
              <span>
                <img src="./images/profile-4.jpg" />
              </span>
              <span>
                <img src="./images/profile-15.jpg" />
              </span>
              <p>
                Liked by <b>Ernest Achiever</b> and <b>2, 323 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Benjamin Dwayne</b> Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nostrum, consequuntur!
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 277 comments</div>
          </div>
          {/*--------------- END OF FEED 6 ------------------*/}
          {/*--------------- FEED 7 ------------------*/}
          <div className="feed">
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src="./images/profile-3.jpg" />
                </div>
                <div className="info">
                  <h3>Indiana Ellison</h3>
                  <small>Qatar, 8 Hours Ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h" />
              </span>
            </div>
            <div className="photo">
              <img src="./images/feed-6.jpg" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span>
                  <i className="uil uil-heart" />
                </span>
                <span>
                  <i className="uil uil-comment-dots" />
                </span>
                <span>
                  <i className="uil uil-share-alt" />
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="uil uil-bookmark-full" />
                </span>
              </div>
            </div>
            <div className="liked-by">
              <span>
                <img src="./images/profile-10.jpg" />
              </span>
              <span>
                <img src="./images/profile-4.jpg" />
              </span>
              <span>
                <img src="./images/profile-15.jpg" />
              </span>
              <p>
                Liked by <b>Benjamin Dwayne</b> and <b>2, 323 others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                <b>Indiana Ellison</b> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Consequuntur itaque quasi autem pariatur
                ducimus eligendi, qui odio molestias at molestiae.
                <span className="harsh-tag">#lifestyle</span>
              </p>
            </div>
            <div className="comments text-muted">View all 277 comments</div>
          </div>
          {/*--------------- END OF FEED 7 ------------------*/}
        </div>
        {/*--------------- END OF FEEDS ------------------*/}
      </div>
      {/*--------------- END OF MIDDLE ------------------*/}
      {/*--------------- RIGHT ------------------*/}
      <div className="right">
        {/*----- MESSAGES -----*/}
        <div className="messages">
          <div className="heading">
            <h4>Messages</h4>
            <i className="uil uil-edit" />
          </div>
          {/*----- SEARCH BAR -----*/}
          <div className="search-bar">
            <i className="uil uil-search" />
            <input
              type="search"
              placeholder="Search messages"
              id="message-search"
            />
          </div>
          {/*----- MESSAGES CATEGORY -----*/}
          <div className="category">
            <h6 className="active">Primary</h6>
            <h6>General</h6>
            <h6 className="message-requests">Requests (7)</h6>
          </div>
          {/*----- MESSAGES -----*/}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-17.jpg" />
            </div>
            <div className="message-body">
              <h5>Edem Quist</h5>
              <p className="text-muted">Just woke up bruh</p>
            </div>
          </div>
          {/*----- MESSAGES -----*/}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-6.jpg" />
            </div>
            <div className="message-body">
              <h5>Daniella Jackson</h5>
              <p className="text-bold">2 new messages</p>
            </div>
          </div>
          {/*----- MESSAGES -----*/}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-8.jpg" />
              <div className="active" />
            </div>
            <div className="message-body">
              <h5>Chantel Msiza</h5>
              <p className="text-muted">lol u right</p>
            </div>
          </div>
          {/*----- MESSAGES -----*/}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-10.jpg" />
            </div>
            <div className="message-body">
              <h5>Juliet Makarey</h5>
              <p className="text-muted">Birtday Tomorrow</p>
            </div>
          </div>
          {/*----- MESSAGES -----*/}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-3.jpg" />
              <div className="active" />
            </div>
            <div className="message-body">
              <h5>Keylie Hadid</h5>
              <p className="text-bold">5 new messages</p>
            </div>
          </div>
          {/*----- MESSAGES -----*/}
          <div className="message">
            <div className="profile-photo">
              <img src="./images/profile-15.jpg" />
            </div>
            <div className="message-body">
              <h5>Benjamin Dwayne</h5>
              <p className="text-muted">haha got that!</p>
            </div>
          </div>
        </div>
        {/*----- END OF MESSAGES -----*/}
        {/*----- FRIEND REQUEST -----*/}
        <div className="friend-requests">
          <h4>Requests</h4>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="./images/profile-20.jpg" />
              </div>
              <div>
                <h5>Hajia Bintu</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="./images/profile-18.jpg" />
              </div>
              <div>
                <h5>Edelson Mandela</h5>
                <p className="text-muted">2 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src="./images/profile-17.jpg" />
              </div>
              <div>
                <h5>Megan Baldwin</h5>
                <p className="text-muted">5 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
        </div>
      </div>
      {/*--------------- END OF RIGHT ------------------*/}
    </div>
  </main>
    </div>
  )
}
