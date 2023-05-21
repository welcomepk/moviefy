import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector(state => state.home);

    return (
        <div className="genres">
            {
                data?.map(g_id => {
                    if (!genres[g_id]) return;
                    return <div key={g_id} className="genre">
                        {genres[g_id]?.name}
                    </div>
                })
            }
        </div>
    )
}

export default Genres