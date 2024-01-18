export const adminMenu = [
    { //quản lý người dùng
        name: 'system.header.user',
        menus: [
            {
                name: 'system.header.manage-patient', link: '/system/manage-patient'
            },
            {
                name: 'system.header.manage-doctor', link: '/system/manage-patient'
            },
            {
                name: 'system.header.manage-admin', link: '/system/manage-patient'
                /* subMenus: [
                    { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                    { name: 'menu.system.system-administrator.user-redux', link: '/system/manage-patient' },
                ] */
            },





        ]
    },
    { //quản lý phòng khám
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },
        ]
    },
    { //quản lý chuyên khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty'
            },
        ]
    },
    { //quản lý cẩm nang
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'
            },
        ]
    },
];


export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            { //quản lý kế hoạch khám bệnh bác sĩ

                name: 'menu.doctor.manage-shedule', link: '/doctor/manage-shedule'

            },
            { //quản lý kế hoạch bệnh nhân của bác sĩ

                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'

            },
        ]
    }


];