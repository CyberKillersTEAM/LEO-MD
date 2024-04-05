FROM quay.io/cyberkillersteam/leo-md
RUN git clone https://github.com/CyberKillersTEAM/LEO-MD /root/CyberKillersTEAM
WORKDIR /root/CyberKillersTEAM/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
