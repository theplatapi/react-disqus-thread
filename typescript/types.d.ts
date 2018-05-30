import * as React from 'react';

type OnCommentCallback = (comment: { id: string, text: string }) => any;

/**
 * Interface for `DisqusThread` props.
 *
 * @interface    DisqusThreadProps
 * @since        1.0.3
 */
export declare interface DisqusThreadProps {
    id?: string;

    /**
     * `shortname` tells the Disqus service your forum's shortname,
     * which is the unique identifier for your website as registered
     * on Disqus. If undefined , the Disqus embed will not load.
     *
     * @property    {string}    shortname
     */
    shortname: string;

    /**
     * `identifier` tells the Disqus service how to identify the
     * current page. When the Disqus embed is loaded, the identifier
     * is used to look up the correct thread. If disqus_identifier
     * is undefined, the page's URL will be used. The URL can be
     * unreliable, such as when renaming an article slug or changing
     * domains, so we recommend using your own unique way of
     * identifying a thread.
     *
     * @property    {string}    identifier
     */
    identifier?: string;

    /**
     * `title` tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus for the first time.
     * If undefined, Disqus will use the <title> attribute of the page.
     * If that attribute could not be used, Disqus will use the URL of the page.
     *
     * @property    {string}    title
     */
    title?: string;

    /**
     * `url` tells the Disqus service the URL of the current page.
     * If undefined, Disqus will take the window.location.href.
     * This URL is used to look up or create a thread if disqus_identifier
     * is undefined. In addition, this URL is always saved when a thread is
     * being created so that Disqus knows what page a thread belongs to.
     *
     * @property    {string}    url
     */
    url?: string;

    /**
     * `category_id` tells the Disqus service the category to be used for
     * the current page. This is used when creating the thread on Disqus
     * for the first time.
     *
     * @property    {string}    category_id
     */
    category_id?: string;

    /**
     * `onNewComment` function accepts one parameter `comment` which is a
     * JavaScript object with comment `id` and `text`. This allows you to track
     * user comments and replies and run a script after a comment is posted.
     *
     * `({id, text}) => any`
     *
     * @property    {function}    onNewComment
     */
    onNewComment?: OnCommentCallback;

    /**
     * `language` tells the Disqus service which language should be used.
     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
     * If undefined, English is used as default one
     *
     * @property    {string}    language
     */
    language?: string;
}

export declare class DisqusThread extends React.Component<DisqusThreadProps, {}> {
}
export default DisqusThread;