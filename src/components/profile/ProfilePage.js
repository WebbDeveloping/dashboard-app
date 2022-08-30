import React from 'react'

export default function ProfilePage() {
  return (
    <div className="profile-page">
    <div className="grid">
      <div className="row flex">
        <div className="module col-2-of-3">
          <div className="profile-page__image-banner">
            <img 
            src="https://assets.website-files.com/6260849a6eab2a733e282630/627428633aafc4d117e3638d_profile-bg-banner-small-dashboardly-webflow-template-p-800.jpeg" 
            alt="" 
            className="image fit-cover" />
          </div>
          <div className="profile-page__bio-container">
            <div className="flex--align-end">
              <div className="profile-page__profile-picture-container">
                <img src="https://assets.website-files.com/6260849a6eab2a733e282630/626997720dc9d4061a009219_john-carter-avatar-medium-dashboardly-webflow-template.jpg" alt="" className="avatar-circle" />
              </div>
              <div className="profile-page__name-container"></div>
            </div>
            <div className="divider"/>
            <div className="profile-page__about-right-text">
              <h4 className="h4 mb-32">About Me</h4>
              <p className="text__200 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text__200 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text__200 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="module col-1-of-3">1-4</div>
      </div>
    </div>
    </div>
  )
}
