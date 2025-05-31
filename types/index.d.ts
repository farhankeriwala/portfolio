declare interface NavItem {
    href: string;
    label: string;
    icon: string;
}

declare interface SocialMediaItem {
    url: string
    label: string
    icon: string
}

declare interface ExperienceItem {
    _id: string
    position: string
    company: string
    startDate: string
    endDate: string
    description: string
    companyLogo: {
        asset: string
    }
}