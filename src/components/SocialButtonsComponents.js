import React from 'react';
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";

class SocialButtonsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const shareUrl = 'http://github.com';
        const title = 'GitHub';

        return (
            <div className="share-buttons">
                <EmailShareButton subject="test"><EmailIcon size={32} round={true}/></EmailShareButton>
                <FacebookShareButton url={shareUrl} quote={title}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                <RedditShareButton><RedditIcon size={32} round={true} /></RedditShareButton>
                <TelegramShareButton><TelegramIcon size={32} round={true} /></TelegramShareButton>
                <TwitterShareButton><TwitterIcon size={32} round={true} /></TwitterShareButton>
                <WhatsappShareButton><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
            </div>
        );
    }
}

export default SocialButtonsComponent;