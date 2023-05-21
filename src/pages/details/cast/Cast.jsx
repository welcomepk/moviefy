import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";


const Skeleton = () => {
    return (
        <div className="skItem">
            <div className="circle skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row2 skeleton"></div>
        </div>
    );
};

const Cast = ({ data, isLoading }) => {
    const { url } = useSelector((state) => state.home);


    return (
        <div className="castSection">
            <ContentWrapper>
                {!isLoading ? (<>
                    <div className="sectionHeading">Top Cast</div>
                    {data?.length === 0 && "there are no Cast available"}
                    <div className="listItems">
                        {data?.map(item => {
                            let img_url = item.profile_path ? url.profile + item.profile_path : avatar;
                            return <div key={item.id} className="listItem">
                                <div className="profileImg">
                                    <Img
                                        src={img_url}
                                    />
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="character">{item.character}</div>
                            </div>
                        })}
                    </div>
                </>
                ) : (
                    <div className="castSkeleton">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;