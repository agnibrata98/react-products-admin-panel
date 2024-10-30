export const endPoints = {
    auth: {
        signin: `/user/signin`,
        signup: `/user/signup`,
        profileDetails: `/user/profile-details`
    },

    cms: {
        create: `/product/create`,
        update: `/product/update`,
        details: `/product/detail`,
        list: `/product/list`,
        remove: `/product/remove`
    }
}

export const successNotification = [
    endPoints.auth.signin,
    endPoints.auth.signup,
    endPoints.auth.profileDetails,
    endPoints.cms.create,
    endPoints.cms.update,
    endPoints.cms.list,
    endPoints.cms.remove,
    endPoints.cms.details,
]