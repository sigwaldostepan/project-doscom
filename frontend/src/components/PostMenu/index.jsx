import { Link } from "react-router-dom";

const posts = {
  img: "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/17048/production/_133208249_4f785acb8e5566cc6e0f944bc719b88644580cbc.jpg",
  title: "Decul nangis",
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus nam maxime aperiam dolores quos ullam quam eum
          asperiores sequi molestiae, facilis esse. Ratione hic nihil
          nulla a consectetur animi velit? Dolor id iusto assumenda
          adipisci quis ipsam praesentium odit corrupti, eum minima
          quisquam repudiandae quas dolore earum asperiores enim culpa
          deleniti rerum autem ea debitis vel magni laborum? Beatae,
          temporibus! Incidunt numquam aliquid quisquam ipsam corrupti
          porro quis excepturi expedita amet eius! Cum, dolor.
          Necessitatibus omnis distinctio odio ab, asperiores doloribus
          consectetur ullam labore esse nostrum nesciunt officiis
          tenetur non. Quas distinctio veritatis totam dicta deserunt id
          quam praesentium ut esse? Deserunt eum possimus enim nisi
          deleniti. Iste, quibusdam sint voluptatum eos dolor fugiat
          labore ratione dolorem! Expedita, iure assumenda. Dicta ullam
          iusto doloribus aspernatur, architecto accusamus commodi a
          harum similique amet necessitatibus numquam culpa, debitis
          quia illo ratione ipsum molestias dolorum reiciendis
          distinctio omnis officia, asperiores sapiente?
          
          
          Quia, nulla?
          Voluptatem non impedit earum fugiat quia aut vero eum nostrum,
          cupiditate sunt est atque laboriosam commodi maiores quas!
          Laboriosam illum eveniet praesentium cumque corporis qui
          saepe, optio nisi labore nostrum. Quasi porro ducimus
          similique repellendus explicabo eius, adipisci ipsam dolores
          quibusdam nisi quas illum et eum ab dolorum temporibus sint
          necessitatibus id reiciendis minima! Nemo nihil odio adipisci
          architecto velit. Quo voluptates maxime dolores reprehenderit
          saepe! Porro odio illo dolorum voluptatem enim, explicabo vel,
          dolorem facere non sequi nemo debitis incidunt illum tenetur
          corporis laboriosam quasi optio quidem mollitia beatae. Quae
          illum dicta sunt iure nemo corporis blanditiis ab dolorem
          distinctio rerum. Iste saepe nesciunt repellendus officia sed
          et quidem quisquam libero commodi ab eius hic voluptas
          exercitationem, dolorem sint. Exercitationem necessitatibus ab
          laborum libero harum dolores. Perspiciatis totam id ad quae
          ullam provident molestias porro quidem, minus veritatis, eius
          facilis, exercitationem saepe placeat fuga ut dolore rem!
          Vitae, neque. Fugit doloribus eos accusamus delectus, dolorum
          distinctio laborum expedita officia voluptatem, ipsam cumque
          vero eum qui blanditiis vitae perspiciatis voluptates aliquam
          eius tempora commodi ex veritatis consectetur. Non, explicabo
          optio. Eveniet dicta doloribus ut sequi accusamus quaerat,
          nostrum error in explicabo eum at tempora possimus iusto
          quibusdam neque sit quisquam consectetur sunt vel amet totam?
  
  
          Illo quos assumenda ratione nostrum. Et asperiores debitis
          sequi itaque saepe dignissimos. Obcaecati possimus animi
          culpa, nemo praesentium voluptate sint corporis
          necessitatibus, in aspernatur, soluta nostrum iste officia
          velit itaque ex eaque dicta molestias voluptatem! Ducimus
          placeat repellendus rem earum neque officiis magnam explicabo,
          magni ullam facere vitae cumque libero aliquam, odio autem
          consequatur, impedit iste temporibus ratione porro atque iusto
          a eos dolorum! Suscipit? Reiciendis sed explicabo officiis
          maxime, officia doloremque nulla autem nam, placeat temporibus
          dolore. Minima facere aut vitae quaerat, laborum, eum et
          deserunt magni laboriosam reiciendis delectus ipsa aspernatur
          nesciunt molestias?`,
};

const PostMenu = () => {
  return (
    <aside className="relative top-0 h-screen p-4">
      <div className="py-4">
        <h2 className="font-bold text-lg">Other post you may like</h2>
      </div>

      <Link className="py-4 flex items-center justify-center gap-4 border-neutral border-b border-t">
        <img
          className="w-full max-w-[150px] h-full max-h-[80px] object-cover"
          src={posts.img}
          alt={posts.title}
        />
        <h1 className="font-bold text-md hover:underline">{posts.title}</h1>
      </Link>
      <Link className="py-4 flex items-center justify-center gap-4 border-neutral border-b border-t">
        <img
          className="w-full max-w-[150px] h-full max-h-[80px] object-cover"
          src={posts.img}
          alt={posts.title}
        />
        <h1 className="font-bold text-md hover:underline">{posts.title}</h1>
      </Link>
      <Link className="py-4 flex items-center justify-center gap-4 border-neutral border-b border-t">
        <img
          className="w-full max-w-[150px] h-full max-h-[80px] object-cover"
          src={posts.img}
          alt={posts.title}
        />
        <h1 className="font-bold text-md hover:underline">{posts.title}</h1>
      </Link>
      <Link className="py-4 flex items-center justify-center gap-4 border-neutral border-b border-t">
        <img
          className="w-full max-w-[150px] h-full max-h-[80px] object-cover"
          src={posts.img}
          alt={posts.title}
        />
        <h1 className="font-bold text-md hover:underline">{posts.title}</h1>
      </Link>
      <Link className="py-4 flex items-center justify-center gap-4 border-neutral border-b border-t">
        <img
          className="w-full max-w-[150px] h-full max-h-[80px] object-cover"
          src={posts.img}
          alt={posts.title}
        />
        <h1 className="font-bold text-md hover:underline">{posts.title}</h1>
      </Link>
    </aside>
  );
};

export default PostMenu;
