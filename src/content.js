export const content = {
    bestStories: {
        title: 'Best stories',
        methods: [
            {
                name: 'get_best_stories',
                params: [
                    {
                        name: 'max_items'
                    }
                ],
                desc: 'Hacker News best stories'
            },
            {
                name: 'get_best_stories_ids',
                desc: 'Hacker News best stories ids'
            }
        ]
    },
    newStories: {
        title: 'New stories',
        methods: [
            {
                name: 'get_new_stories',
                params: [
                    {
                        name: 'max_items'
                    }
                ],
                desc: 'Hacker News newest stories'
            },
            {
                name: 'get_new_stories_ids',
                desc: 'Hacker News best stories ids'
            }
        ]
    },
    topStories: {
        title: 'Top stories',
        methods: [
            {
                name: 'get_top_stories',
                params: [
                    {
                        name: 'max_items'
                    }
                ],
                desc: 'Hacker News top stories'
            },
            {
                name: 'get_top_stories_ids',
                desc: 'Hacker News top stories ids'
            }
        ]
    },
    latestStories: {
        title: 'Latest stories',
        methods: [
            {
                name: 'get_latest_ask_stories',
                params: [
                    {
                        name: 'max_items'
                    }
                ],
                desc: 'Hacker News latest ask stories'
            },
            {
                name: 'get_latest_ask_stories_ids',
                desc: 'Hacker News latest ask stories ids'
            },
            {
                name: 'get_latest_job_stories',
                params: [
                    {
                        name: 'max_items'
                    }
                ],
                desc: 'Hacker News latest job stories'
            },
            {
                name: 'get_latest_job_stories_ids',
                desc: 'Hacker News latest job stories ids'
            },
            {
                name: 'get_latest_show_stories',
                params: [
                    {
                        name: 'max_items'
                    }
                ],
                desc: 'Hacker News latest show stories'
            },
            {
                name: 'get_latest_show_stories_ids',
                desc: 'Hacker News latest show stories ids'
            }
        ]
    },
    profile: {
        title: 'Profile',
        methods: [
            {
                name: 'get_updates',
                desc: 'Hacker News updated profiles'
            },
            {
                name: 'get_user_by_username',
                params: [
                    {
                        name: 'username',
                        desc: 'Username of the user,\nthat should be retrieved.'
                    }
                ],
                desc: 'Get Hacker News user'
            }
        ]
    },
    items: {
        title: 'Items',
        methods: [
            {
                name: 'get_item_by_id',
                params: [
                    {
                        name: 'id',
                        desc: 'Id of the item,\nthat should be retrieved.'
                    }
                ],
                desc: 'Get Hacker News by Id'
            },
            {
                name: 'get_items_by_ids',
                params: [
                    {
                        name: 'ids',
                        desc: 'List of ids.'
                    }
                ],
                desc: 'Get Hacker News by ids'
            },
            {
                name: 'get_max_item_id',
                desc: 'Hacker News item largest id'
            }
        ]
    }
};