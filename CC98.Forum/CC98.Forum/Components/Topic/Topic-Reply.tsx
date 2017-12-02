﻿import * as React from 'react';
import * as Utility from '../../Utility';
import * as $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { RouteComponent } from '../RouteComponent';
import { Replier } from './Topic-Replier';
import { ReplyContent } from './Topic-ReplyContent';
declare let moment: any;

export class Reply extends RouteComponent<{}, { contents, masters}, { page, topicid, userName }>{
    constructor(props, content) {

        super(props, content);
        this.state = {
            contents: [],
            masters: [],
        };

    }
    async getMasters(topicId) {
        return Utility.getMasters(topicId);
      //  store.dispatch()
    }
    async componentWillReceiveProps(newProps) {
        const page = newProps.match.params.page || 1;
        const storageId = `TopicContent_${newProps.match.params.topicid}_${page}`;
        let realContents;
        /* if (!Utility.getStorage(storageId)) {
             realContents = await Utility.getTopicContent(newProps.match.params.topicid, page);
             Utility.setStorage(storageId, realContents);
         }
         else {
             realContents = Utility.getStorage(storageId);
         }*/

realContents = await Utility.getTopicContent(newProps.match.params.topicid, page, this.context.router);
const masters = await this.getMasters(newProps.match.params.topicid);
this.setState({ contents: realContents, masters: masters });

    }

    private generateContents(item: ContentState) {
    return <div className="reply" ><div style={{ marginTop: "1rem", marginBotton: "0.3125rem", border: "#EAEAEA solid thin" }}>
        <Replier key={item.postId} isAnonymous={item.isAnonymous} userId={item.userId} topicid={item.topicId} userName={item.userName} replyTime={item.time} floor={item.floor} userImgUrl={item.userImgUrl} sendTopicNumber={item.sendTopicNumber} privilege={item.privilege} />
        <ReplyContent key={item.content} masters={this.state.masters} userId={item.userId} content={item.content} signature={item.signature} topicid={item.topicId} postid={item.postId} contentType={item.contentType} />
    </div>
    </div>;
}
render() {

    return <div className="center" style={{ width: "100%" }}>
        {this.state.contents.map(this.generateContents.bind(this))}
    </div>
        ;
}
}
/**
 * 文章内容
 */
export class ContentState {
    constructor(
    ) {

    }
    id: number;
    content: string;
    time: string;
    isDelete: boolean;
    floor: number;
    isAnonymous: boolean;
    lastUpdateAuthor: string;
    lastUpdateTime: string;
    topicId: number;
    userName: string;
    sendTopicNumber: number;
    userImgUrl: string;
    signature: string;
    userId: number;
    privilege: string;
    likeNumber: number;
    dislikeNumber: number;
    postId: number;
    contentType: number;
}