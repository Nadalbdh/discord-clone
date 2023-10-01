import React, { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import { getProfileData, updateProfileData } from "../../services/profile"
import UpdateProfileModal from "./components/UpdateProfileModal"

const Profile = () => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [profile, setProfile] = useState({})

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [profileInfo, setProfileInfo] = useState("")
  const [profileBanner, setProfileBanner] = useState("")
  const [profilePicture, setProfilePicture] = useState("")

  useEffect(() => {
    getProfileData().then((response) => {
      setProfile(response)
      setDataLoaded(true)
    })
  }, [])

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    updateProfileData(
      name,
      email,
      profileInfo,
      profilePicture,
      profileBanner
    ).then((response) => {
      setProfile(response)
    })
    modalClose("update-profile-modal")
  }

  const modalTrigger = (parameter, category_id) => {
    const modal = document.getElementById(parameter)
    modal.style.display = "block"
  }

  const modalClose = (parameter) => {
    const modal = document.getElementById(parameter)
    modal.style.display = "none"
  }

  return (
    <>
      {dataLoaded ? (
        <div className="container">
          <UpdateProfileModal
            modalClose={modalClose}
            handleUpdateProfile={handleUpdateProfile}
            profile={profile}
            setName={setName}
            setEmail={setEmail}
            setProfileInfo={setProfileInfo}
            setProfileBanner={setProfileBanner}
            setProfilePicture={setProfilePicture}
            profileBanner={profileBanner}
            profilePicture={profilePicture}
          />
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="card">
                <div className="card-image">
                  <div className="image">
                    <figure className="image">
                      <img src={profile.banner} key={profile.banner} />
                    </figure>
                  </div>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64 mx-auto">
                        <img src={profile.picture} key={profile.picture} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{profile.user.first_name}</p>
                      <p className="subtitle is-6">@{profile.user.username}</p>
                    </div>
                  </div>
                  <div className="content">{profile.profile_info}</div>
                </div>
                <div className="card-footer has-text-centered">
                  <a
                    onClick={modalTrigger.bind(this, "update-profile-modal")}
                    className="card-footer-item"
                  >
                    Update Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Profile
