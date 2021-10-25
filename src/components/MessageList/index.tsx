import React, { useEffect, useState } from "react";

import { ScrollView } from "react-native";
import { Message, MessageProps } from "../Message";

import { styles } from "./styles";
import { api } from "./../../services/api";

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>("messages/last3");
      setCurrentMessages(messagesResponse.data);
    }
    fetchMessages();
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages &&
        currentMessages.map((message) => (
          <Message key={message.id} data={message} />
        ))}
    </ScrollView>
  );
}
