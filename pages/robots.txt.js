import { DOMAIN } from "../config";

export const runtime = 'experimental-edge';

const generateRobotsTxt = () => {
    return `User-agent: *
Disallow: /images/
Sitemap: ${DOMAIN}/sitemap.xml
`;
};

export const getServerSideProps = async ({ res }) => {
    const robotsTxtContent = generateRobotsTxt();
    res.setHeader("Content-Type", "text/plain");
    res.write(robotsTxtContent);
    res.end();
    return { props: {} };
};

const RobotsTxt = () => { return null; };
export default RobotsTxt;
