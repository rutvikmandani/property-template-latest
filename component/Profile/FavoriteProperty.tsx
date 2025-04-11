import { globalServices } from "@/services/global.services";
import { HomeDataRes } from "@/src/types/propertyCard";
import styles from "@/styles/Container.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";
import { PropertyCard } from "../PropertyCard";

interface Property {
  title: string;
  sqft: string;
  beds: string;
  baths: number;
  images: string[];
  address: string;
  price: string;
  listingKey: string;
  transactionType: string;
  isFavorite: boolean;
  createdAt: string;
}

const timeAgo = (utcTimestamp: string): string => {
  const localTime = moment.utc(utcTimestamp).local();
  return localTime.fromNow();
};

async function fetchFavoriteProperties() {
  const res = await globalServices.getAll(`/customers/favorites`);
  if (res.status === 200 && res.data.data) {
    const propertyData =
      res.data.data.length > 0
        ? res.data.data.map((data: HomeDataRes) => ({
            title: data.CityRegion ?? data.City ?? "",
            sqft: data.LivingAreaRange ?? 0,
            beds:
              data.BedroomsAboveGrade !== null &&
              data.BedroomsBelowGrade !== null
                ? `${data.BedroomsAboveGrade}+${data.BedroomsBelowGrade}`
                : (data.BedroomsTotal ?? 0),
            baths: data.BathroomsTotalInteger ?? 0,
            images:
              data.images?.length > 0
                ? data.images.map(
                    (image: { order: number; image_url: string }) =>
                      image.image_url
                  )
                : [],
            address: data.UnparsedAddress,
            price: (data.ListPrice ?? 0).toLocaleString("en-US"),
            listingKey: data.ListingKey,
            transactionType: data.TransactionType ?? "",
            isFavorite: data.is_favorite ?? false,
            createdAt: data.created_at,
          }))
        : [];
    return propertyData;
  } else {
    return [];
  }
}

export default function FavoriteProperty() {
  const router = useRouter();
  // const propertyData = useQuery({
  //   queryKey: ['excludedQueryKey', 'favorite-property'],
  //   queryFn: () => fetchFavoriteProperties(),
  //   staleTime: 1000 * 60 * 5,
  // })
  const propertyData = {
    data: [
      {
        title: "Markland Wood",
        sqft: "2000-2500",
        beds: "4+1",
        baths: 2,
        images: [
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/medium/c7b23f5d-7368-4b8a-b7d0-27f5177ad9e7-m.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/thumbnail/bfba3260-c8b1-4e5f-8365-101c9da91d1f-t.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/large/64b203d2-ba1a-4637-b2e8-ba448984c452-l.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/thumbnail/38dff0bc-3517-4dc1-8fef-a8b9c69a7149-t.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/medium/e2f7f9db-5a20-4a07-92b4-e4997875c728-m.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/large/e2f7f9db-5a20-4a07-92b4-e4997875c728-l.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/thumbnail/51175895-5cb2-48e0-861d-7c9591cd758c-t.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/large/edaf82bc-3cfc-4c76-ac2d-7f5169445a9e-l.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/medium/d80c48d4-c3d5-42cd-b9c2-2083e30c0a4a-m.jpg",
          "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W12041717/thumbnail/18c7912e-1f21-4daa-8aa6-5b9318f2b652-t.jpg",
        ],
        address: "7 Jeff Drive, Toronto, ON M9C 1J5",
        price: "1,395,000",
        listingKey: "W12041717",
        transactionType: "For Sale",
        isFavorite: false,
        createdAt: "2025-03-26T00:10:18.332000Z",
      },
    ],
    isLoading: false,
  };

  const [properties, setProperties] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setProperties(propertyData.data);
  }, []);

  const handleDelete = (listingKey: string) => {
    // Swal.fire({
    //   text: "Are you sure you want to remove this property from favorite?",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, Remove",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     setIsLoader(true);
    //     globalServices
    //       .post(`/customers/favorites/toggle`, {
    //         propertyListingKey: listingKey,
    //       })
    //       .then((res) => {
    //         if (res.status === 200) {
    //           setProperties((properties) =>
    //             properties.filter(
    //               (property: HomeData) => property.listingKey !== listingKey
    //             )
    //           );
    //         }
    //       })
    //       .finally(() => {
    //         setIsLoader(false);
    //       });
    //   }
    // });
  };

  const handleProperty = (listingKey: string) => {
    router.push(`/property-detail/${listingKey}`);
  };

  const getData = (data: Property, index: number) => {
    return (
      <div
        key={index}
        className={`w-[100%] max-w-[440px] m-2 relative bg-white rounded-t-[20px] overflow-hidden text-[#212529] ${styles.cardWrapper}`}
        onClick={() => router.push(`/property-detail/${data.listingKey}`)}
      >
        <PropertyCard {...data} index={index} displayDeleteIcon />
      </div>
    );
  };

  return (
    <div className="p-4 rounded-2xl lg:rounded-3xl border border-transparent md:border-[#ebebeb] bg-white">
      <div className="space-y-6">
        {properties && Array.isArray(properties) && properties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center">
            {[...properties, ...properties, ...properties, ...properties].map(
              (property: Property, index: number) => getData(property, index)
            )}
          </div>
        ) : propertyData?.isLoading ? null : (
          <div className="font-semibold text-lg text-center text-gray-600">
            No Property Found
          </div>
        )}
      </div>
    </div>
  );
}
