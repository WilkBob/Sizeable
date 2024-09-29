const UsageExample = () => {
  return (
    <div className="block bg-rose-950/50 border-2 text-white p-4 rounded-md overflow-x-auto shadow-lg">
      <pre>
        <code>
          <span className="text-teal-300">&lt;ImageProvider</span>{" "}
          <span className="text-yellow-300">indexUrl</span>=
          <span className="text-lime-300">&quot;/path/to/index.json&quot;</span>
          <span className="text-teal-300">&gt;</span>
          <br />
          &nbsp;&nbsp;
          <span className="text-teal-300">&lt;ProgressiveImage</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-300">src</span>=
          <span className="text-lime-300">&quot;image-filename&quot;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-300">alt</span>=
          <span className="text-lime-300">
            &quot;Description of the image&quot;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-300">className</span>=
          <span className="text-lime-300">&quot;your-custom-classes&quot;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-300">placeholderClassName</span>=
          <span className="text-lime-300">&quot;your-custom-classes&quot;</span>
          <br />
          &nbsp;&nbsp;<span className="text-teal-300">/&gt;</span>
          <br />
          <span className="text-teal-300">&lt;/ImageProvider&gt;</span>
        </code>
      </pre>
    </div>
  );
};

export default UsageExample;
