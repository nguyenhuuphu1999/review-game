import React from 'react';
import CardImage from '../../../Component/CardImage';
import Image from '../../../Component/Image';
import Tag_a from '../../../Component/Link_a/Tag_a';
import List from '../../../Component/List/List';
import Menu from '../../../Component/Menu/Menu';
import Data from './Data';
// import Other from '../../GameGiaiTri/Other'
import Other from '../../PageDetail/GameGiaiTri/Other'
import { Card } from '@material-ui/core';

const GameBanCaItem = () => {
    return (
        <div>
            <h1 className="h1">Top 5 game cá lớn nuốt cá bé đáng chơi nhất 2021</h1>
                    <p className="p">Cá lớn nuốt cá bé là một game huyền thoại trong tuổi thơ của mỗi đứa trẻ. Cùng bài viết điểm lại top 5 game cá lớn nuốt cá bé được các bạn đón nhận nhiều nhất 2020.</p>
               
                    
                    <Menu Data={Data.DataList}/>

            <h2 className="h2">1. Fish Go.io</h2>
              
               
               <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/cá-lớn-nuốt-cá-bé.png"/>
                
                <p className="p">Một bầy cá đang tụ tập dưới biển sâu. Bạn sẽ được vào vai một con cá trong số đó. Bạn cần di chuyển khéo léo để nuốt lấy những con cá bé làm cho mình lớn mạnh nhưng cũng cần di chuyển thật khéo léo để không bị những loài cá lớn hơn mình ăn thịt. Việc của bạn đơn giản là tìm cách để sinh tồn dưới đại dương đầy rẫy nguy hiểm để làm người chiến thắng sau cùng.  </p>
                <p className="p">Khi tải Fish Go.io, bạn có thể rủ bạn bè cùng chơi vì game cho phép nhiều người chơi trên cùng thiết bị, điều này giúp cho cuộc đua sinh tồn trở nên phấn khích, vui nhộn hơn.  Bạn có thể nhìn thấy những loài cá kì lạ chưa từng gặp qua. Hãy nắm bắt nhanh địa hình để có thể luồn lách và phô diễn các kĩ năng di chuyển  của mình cho những người cùng chơi thấy được.                
            <h2 className="h2">2. Cá lớn nuốt cá bé</h2>

                <CardImage iamge="https://kiemtinh.com/wp-content/uploads/2020/12/cá-lớn-nuốt-cá-bé1.jpg"/>

                <p className="p">Xuất phát ban đầu của bạn trong Cá lớn nuốt cá bé chỉ là một chú cá nhỏ bé. Bạn cần chạm tay để di chuyển chú cá của mình về hướng những đàn cá nhỏ xíu. Trên đường đi, bạn có thể bắt gặp những con cá “khổng lồ” và trước tiên, bạn cần tránh chúng, cho đến khi kích thước của bạn vượt qua được chúng. </p>
                <p className="p">Khi công nghệ thông tin chưa phát triển, việc di chuyển chú cá bằng chuột trên những màn hình máy tính sẽ gây cho bạn nhiều khó khăn. Nhưng hiện tại, chỉ cần những cú chạm nhẹ là bạn đã có thể lướt một cách dễ dàng.  </p>
                <p className="p">Có nhiều cấp độ game cho bạn lựa chọn. Cấp độ càng cao, độ thú vị càng tăng. Hãy sử dụng những bong bóng được tạo ra trong game, chúng sẽ giúp ích cho bạn.</p>

            <h2 className="h2">3. Cá mập phiêu lưu kí</h2>  

                <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/cá-lớn-nuốt-cá-bé2.jpg"/>

                <p className="p">Nếu như trên mặt đất có “Dế Mèn phiêu lưu kí” thì giờ đây, dưới đại dương đã xuất hiện chú “Cá mập phiêu lưu kí”. Đây là chú cá mập tí hon bị thất lạc gia đình của mình. Việc của bạn là giúp chú tìm lại gia đình để được đoàn tụ với họ. Trong hành trình tìm kiếm, chú phải tự kiếm ăn và tránh né kẻ thù. Tất nhiên là khi được nạp các loại thức ăn, chú sẽ lớn dần. Đến một kích thước nhất định, chú sẽ tự tin dưới đại dương mà không sợ bất kì loài sinh vật nào.</p>
                <p className="p"> Trong game, bạn sẽ được chiêm ngưỡng những rạn san hô vô cùng bắt mắt và vô vàn loài cá tuyệt đẹp về cả hình dáng lẫn màu sắc. Game cũng trang bị những khung cảnh dưới lòng đại dương giống y như thật giúp người chơi thích thú. Ngoài việc ăn các con cá nhỏ hơn mình, bạn có thể đớp ngọc trai và bong bóng. Hãy chú ý đến chúng trong hành trình của mình nhé.</p> 
                <p className="p">Khi bạn giành được chiến thắng trong trò chơi, bạn sẽ được tận hưởng cảm giác hạnh phúc trong khoảnh khắc chú cá mập đoàn tụ với gia đình. Bạn chính là ân nhân đã giúp đỡ nó đấy. </p></p>
           
            <h2 className="h2">4. Cá lớn cá bé</h2>

                <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/cá-lớn-nuốt-cá-bé3.jpg"/>
                <p className="p">Cá lớn cá bé là game có tới gần 100 màn chơi cho bạn. Cũng như các game cá lớn nuốt các bé khác, bạn cần điều khiển chú cá của mình ăn các sinh vật biển nhỏ hơn để lớn dần. Mỗi một màn chơi sẽ có một định mức về kích thước của chú cá. Khi bạn hoàn thành được định mức đó, bạn sẽ qua màn. Bằng việc ăn những sinh vật bé hơn một cách điên đảo, bạn có thể lớn nhanh nhưng không nhất thiết phải làm như vậy, vì biết đâu, việc luồn lách những con cá lớn lại đưa bạn đi đến những nơi đẹp bất ngờ dưới lòng đại dương. </p>
                <p className="p">Âm thanh trong game hết sức sống động kết hợp cùng lối chơi đơn giản đã tạo ra nét riêng biệt cho Cá lớn cá bé. </p>

            <h2 className="h2">5. Hungry Shark Evolution</h2>

                <CardImage image="https://kiemtinh.com/wp-content/uploads/2020/12/cá-lớn-nuốt-cá-bé4.jpg"/>
            
                <p className="p">Đây là phiên bản 3D thú vị nhất trong top game cá lớn nuốt cá bé. Việc của bạn là hóa thân thành cá mập và tận hưởng trò chơi hoàn toàn miễn phí này. Ngoài việc chơi online, game cho phép bạn tham gia ngay cả khi ngoại tuyến.</p>
                <p className="p">Một chú cá mập đang mang một chiếc bụng rỗng tuếch và điên cuồng tìm kiếm thức ăn dưới đại dương sâu thẳm. Trong quá trình giúp cá mập tìm kiếm thức ăn, bạn sẽ khám phá ra một thế giới đại dương tuyệt diệu với nhiều loại sinh vật biển. </p>
                <p className="p">Trong game này, bạn có thể mở khóa hơn 10 loài cá mập, có thể trở thành những loài cá mập mang tính biểu tượng cao như Megalodon hay Great White,… Không chỉ vậy, bạn còn có thể trở thành 1 nhà tuyển dụng để chiêu mộ những cá mập con về với đội của mình, giúp bạn tăng thêm sức mạnh khi săn mồi. Game có Gold Rush giúp bạn có thể tồn tại lâu hơn và có thêm nhiều phụ kiện phục vụ cho quá trình đi săn của bạn. Với các góc nghiêng trực quan, quá trình tấn công hay đớp mồi của bạn trở nên thực tế hơn.</p>
                <p className="p">Hãy đồng hành cùng Hungry Shark Evolution và tham gia những sự kiện có trong game để giành được nhiều phần thưởng. Cùng tham gia cuộc phiêu lưu 3D dưới nước thú vị này nào.</p>
                <p className="p">Hi vọng top 5 game cá lớn nuốt cá bé sẽ đưa bạn trở về miền kí ức của tuổi thơ dữ dội.</p>

                <Other Data={Data.DataOther}/>
        </div>
    );
};

export default GameBanCaItem;