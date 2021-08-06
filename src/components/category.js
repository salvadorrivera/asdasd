import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MostrarItem from "./Item";
import { getFirestore } from "../firebase/firebase-index";
export default function ItemCategory() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [, setLoading] = useState(false);

  // -----------------------------

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const category = itemCollection.where("categoryId", "==", `${categoryId}`);
    category
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no results");
        } else {
          setItems(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {items.map((component) => (
        <MostrarItem
          key={component.id}
          id={component.id}
          category={component.category}
          title={component.title}
          pictureUrl={component.pictureUrl}
          price={component.price}
        />
      ))}
    </div>
  );
}
